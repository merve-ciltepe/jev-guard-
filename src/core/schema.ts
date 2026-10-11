import { z } from 'zod';

export const RiskCategoryEnum = z.enum([
  'KVKK_VIOLATION',
  'UNILATERAL_CHANGE',
  'DATA_SELLING_SHARING',
  'AUTO_RENEWAL_TRAP',
  'BINDING_ARBITRATION',
  'LIABILITY_WAIVER',
  'CONTENT_OWNERSHIP',
  'BIOMETRIC_SURVEILLANCE',
  'OTHER_RISK',
]);
export type RiskCategory = z.infer<typeof RiskCategoryEnum>;

export const RiskWeightEnum = z.enum(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']);
export type RiskWeight = z.infer<typeof RiskWeightEnum>;

export const RiskyItemSchema = z.object({
  id: z.string(),
  category: RiskCategoryEnum,
  risk_weight: RiskWeightEnum,
  quote: z.string().min(3, 'Alıntı metni en az 3 karakter olmalıdır'),
  quote_verified: z.boolean().default(false),
  quote_match_score: z.number().min(0).max(1).default(0),
  sade_turkce_aciklama: z.string().min(5, 'Sade Türkçe açıklama zorunludur'),
  kvkk_article_reference: z.string().optional().default('Genel Sözleşme Hukuku'),
  user_rule_matched: z.string().optional(),
  suggested_action: z.string(),
});
export type RiskyItem = z.infer<typeof RiskyItemSchema>;

export const JevReflexSchema = z.object({
  status: z.enum(['SAFE', 'WARN', 'CRITICAL_ALERT', 'UNCERTAIN']),
  headline: z.string(),
  one_liner_reflex: z.string(),
  immediate_advice: z.string(),
  tone: z.literal('blunt_protective').default('blunt_protective'),
});
export type JevReflex = z.infer<typeof JevReflexSchema>;

export const AmbiguityAnalysisSchema = z.object({
  has_ambiguity: z.boolean(),
  explanation: z.string(),
  missing_information: z.array(z.string()).default([]),
});
export type AmbiguityAnalysis = z.infer<typeof AmbiguityAnalysisSchema>;

export const SecurityAuditSchema = z.object({
  prompt_injection_detected: z.boolean().default(false),
  injection_payload_found: z.string().nullable().default(null),
  security_verdict: z.enum(['CLEAN', 'ADVERSARIAL_ATTACK_DETECTED']).default('CLEAN'),
  defense_action: z.string().default('Metin güvenlik filtresinden geçti'),
});
export type SecurityAudit = z.infer<typeof SecurityAuditSchema>;

export const ToSRiskReportSchema = z.object({
  site_url: z.string(),
  document_type: z.enum([
    'Terms of Service (Kullanım Koşulları)',
    'Privacy Policy (Gizlilik Politikası)',
    'Subscription Terms (Abonelik Şartları)',
    'Cookie Policy (Çerez Politikası)',
    'EULA',
    'Mixed / Unknown',
  ]),
  risk_score: z.number().min(0).max(100),
  risk_level: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  legal_disclaimer: z.string().default(
    '⚠️ YASAL UYARI: Bu uygulama hukuki tavsiye vermez. Yalnızca yapay zeka ve algoritmik risk farkındalık aracıdır.'
  ),
  jev_reflex: JevReflexSchema,
  risky_items: z.array(RiskyItemSchema),
  ambiguity_analysis: AmbiguityAnalysisSchema,
  security_audit: SecurityAuditSchema,
  analysis_timestamp: z.string(),
  total_clauses_analyzed: z.number().default(0),
  unverified_claims_rejected_count: z.number().default(0),
});
export type ToSRiskReport = z.infer<typeof ToSRiskReportSchema>;

/**
 * Raw LLM Response Schema before deterministic verification
 */
export const RawLLMResponseSchema = z.object({
  document_type: z.enum([
    'Terms of Service (Kullanım Koşulları)',
    'Privacy Policy (Gizlilik Politikası)',
    'Subscription Terms (Abonelik Şartları)',
    'Cookie Policy (Çerez Politikası)',
    'EULA',
    'Mixed / Unknown',
  ]),
  risky_items: z.array(
    z.object({
      category: RiskCategoryEnum,
      risk_weight: RiskWeightEnum,
      quote: z.string(),
      sade_turkce_aciklama: z.string(),
      kvkk_article_reference: z.string().optional(),
      suggested_action: z.string(),
    })
  ),
  ambiguity_analysis: z.object({
    has_ambiguity: z.boolean(),
    explanation: z.string(),
    missing_information: z.array(z.string()),
  }),
});
export type RawLLMResponse = z.infer<typeof RawLLMResponseSchema>;
