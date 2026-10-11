import {
  RawLLMResponse,
  RawLLMResponseSchema,
  RiskyItem,
  ToSRiskReport,
  ToSRiskReportSchema,
  SecurityAudit,
} from './schema';
import { JevReflexEngine } from './jev-reflex';

export interface VerificationResult {
  valid: boolean;
  report: ToSRiskReport | null;
  errors: string[];
  unverifiedClaimsCount: number;
}

export class DeterministicValidator {
  /**
   * Normalizes text by collapsing whitespace, replacing curly quotes, and trimming.
   */
  public static normalizeText(str: string): string {
    return str
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }

  /**
   * Calculates token overlap / substring similarity between quote and document.
   */
  public static verifyQuoteInDocument(
    quote: string,
    documentText: string
  ): { verified: boolean; matchScore: number } {
    if (!quote || quote.trim().length < 5) {
      return { verified: false, matchScore: 0 };
    }

    // 1. Direct exact match check
    if (documentText.includes(quote.trim())) {
      return { verified: true, matchScore: 1.0 };
    }

    // 2. Normalized whitespace & lowercase match
    const normDoc = this.normalizeText(documentText);
    const normQuote = this.normalizeText(quote);

    if (normDoc.includes(normQuote)) {
      return { verified: true, matchScore: 0.98 };
    }

    // 3. Sliding token window check (tolerates minor character/OCR artifact differences)
    const quoteWords = normQuote.split(' ').filter((w) => w.length > 2);
    if (quoteWords.length >= 3) {
      const firstFew = quoteWords.slice(0, 3).join(' ');
      const lastFew = quoteWords.slice(-3).join(' ');

      if (normDoc.includes(firstFew) && normDoc.includes(lastFew)) {
        return { verified: true, matchScore: 0.92 };
      }
    }

    // Unverified claim: Quote does not exist in the source document
    return { verified: false, matchScore: 0 };
  }

  /**
   * Deterministically validates raw LLM candidate response against source document.
   * Filters out any hallucinated or unverified quotes ("Alıntısı olmayan iddia geçersiz sayılır").
   */
  public static validateAndBuildReport(params: {
    rawResponse: unknown;
    originalDocumentText: string;
    siteUrl: string;
    securityAudit: SecurityAudit;
  }): VerificationResult {
    const { rawResponse, originalDocumentText, siteUrl, securityAudit } = params;
    const errors: string[] = [];

    // 1. Schema Validation
    const parsed = RawLLMResponseSchema.safeParse(rawResponse);
    if (!parsed.success) {
      return {
        valid: false,
        report: null,
        errors: parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`),
        unverifiedClaimsCount: 0,
      };
    }

    const data: RawLLMResponse = parsed.data;
    const verifiedItems: RiskyItem[] = [];
    let unverifiedCount = 0;

    // 2. Deterministic Quote Verification
    data.risky_items.forEach((item, index) => {
      const verification = this.verifyQuoteInDocument(item.quote, originalDocumentText);

      if (verification.verified) {
        verifiedItems.push({
          id: `RISK-${String(index + 1).padStart(2, '0')}`,
          category: item.category,
          risk_weight: item.risk_weight,
          quote: item.quote.trim(),
          quote_verified: true,
          quote_match_score: verification.matchScore,
          sade_turkce_aciklama: item.sade_turkce_aciklama,
          kvkk_article_reference: item.kvkk_article_reference || 'Genel Sözleşme Hukuku',
          suggested_action: item.suggested_action,
        });
      } else {
        // Alıntısı olmayan iddia geçersiz sayılır!
        unverifiedCount++;
        errors.push(
          `[REJECTED_CLAIM] "${item.quote.slice(0, 50)}..." orijinal metinde bulunamadı, iddia geçersiz sayıldı.`
        );
      }
    });

    // 3. If prompt injection was detected, deterministically prepend a security hazard item
    if (securityAudit.prompt_injection_detected) {
      verifiedItems.unshift({
        id: 'SEC-01',
        category: 'OTHER_RISK',
        risk_weight: 'CRITICAL',
        quote: securityAudit.injection_payload_found || 'Adversarial Prompt Injection',
        quote_verified: true,
        quote_match_score: 1.0,
        sade_turkce_aciklama:
          '⚠️ KRİTİK GÜVENLİK TEHLİKESİ: Web sayfası metnine analiz sistemlerini aldatmaya yönelik gizli Prompt Injection yerleştirilmiş!',
        kvkk_article_reference: 'KVKK Madde 4 (Dürüstlük Kuralı İhlali)',
        user_rule_matched: 'Güvenlik Kuralı: Prompt Injection Savunması',
        suggested_action: 'Bu siteye güvenmeyin, sayfadan ayrılın veya hiçbir verinizi paylaşmayın.',
      });
    }

    // 4. Calculate Risk Score deterministically
    let score = 0;
    for (const item of verifiedItems) {
      switch (item.risk_weight) {
        case 'CRITICAL':
          score += 28;
          break;
        case 'HIGH':
          score += 18;
          break;
        case 'MEDIUM':
          score += 9;
          break;
        case 'LOW':
          score += 4;
          break;
      }
    }

    if (securityAudit.prompt_injection_detected) {
      score = Math.max(score, 90);
    }

    score = Math.min(100, Math.max(0, score));

    let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW';
    if (score >= 75) riskLevel = 'CRITICAL';
    else if (score >= 50) riskLevel = 'HIGH';
    else if (score >= 25) riskLevel = 'MEDIUM';
    else riskLevel = 'LOW';

    // 5. Generate Jev Reflex
    const jevReflex = JevReflexEngine.generateReflex({
      riskScore: score,
      riskLevel,
      items: verifiedItems,
      hasAmbiguity: data.ambiguity_analysis.has_ambiguity,
      ambiguityDetails: data.ambiguity_analysis.explanation,
      promptInjection: securityAudit.prompt_injection_detected,
    });

    const report: ToSRiskReport = {
      site_url: siteUrl,
      document_type: data.document_type,
      risk_score: score,
      risk_level: riskLevel,
      legal_disclaimer:
        '⚠️ YASAL UYARI: Bu uygulama hukuki tavsiye vermez. Yalnızca yapay zeka ve algoritmik risk farkındalık aracıdır.',
      jev_reflex: jevReflex,
      risky_items: verifiedItems,
      ambiguity_analysis: data.ambiguity_analysis,
      security_audit: securityAudit,
      analysis_timestamp: new Date().toISOString(),
      total_clauses_analyzed: verifiedItems.length + unverifiedCount,
      unverified_claims_rejected_count: unverifiedCount,
    };

    // Final sanity check against output schema
    const finalCheck = ToSRiskReportSchema.safeParse(report);
    if (!finalCheck.success) {
      return {
        valid: false,
        report: null,
        errors: finalCheck.error.issues.map((i) => `Final Report Error: ${i.message}`),
        unverifiedClaimsCount: unverifiedCount,
      };
    }

    return {
      valid: true,
      report,
      errors,
      unverifiedClaimsCount: unverifiedCount,
    };
  }
}
