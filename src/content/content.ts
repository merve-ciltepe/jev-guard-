import { AlibabaPageAgentBridge } from './page-agent-bridge';
import { DOMHighlighter } from './dom-highlighter';
import { LLMClient, DEFAULT_LLM_CONFIG, LLMConfig } from '../core/llm-client';
import { DeterministicValidator } from '../core/validator';
import { SecurityGuard } from '../core/security';
import { ToSRiskReport } from '../core/schema';

class JevContentSentinel {
  private pageAgentBridge: AlibabaPageAgentBridge;
  private llmClient: LLMClient;
  private currentReport: ToSRiskReport | null = null;
  private widgetContainer: HTMLElement | null = null;

  constructor() {
    this.llmClient = new LLMClient(DEFAULT_LLM_CONFIG);
    this.pageAgentBridge = new AlibabaPageAgentBridge(DEFAULT_LLM_CONFIG);
    this.init();
  }

  private async init() {
    this.setupMessageListener();
    await this.loadConfig();

    // Fast Reflex: Check if current page is likely a Terms/Privacy/Subscription page
    if (this.isLikelyLegalPage()) {
      // Fast reflex auto-trigger
      setTimeout(() => {
        this.runAnalysis(false);
      }, 1000);
    }
  }

  private async loadConfig() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.get(['llmConfig'], (res) => {
        if (res.llmConfig) {
          const cfg = res.llmConfig as LLMConfig;
          this.llmClient = new LLMClient(cfg);
          this.pageAgentBridge = new AlibabaPageAgentBridge(cfg);
        }
      });
    }
  }

  private isLikelyLegalPage(): boolean {
    const url = window.location.href.toLowerCase();
    const title = document.title.toLowerCase();
    const keywords = [
      'terms',
      'tos',
      'privacy',
      'policy',
      'sozlesme',
      'kosullar',
      'gizlilik',
      'abonelik',
      'subscription',
      'legal',
      'kvkk',
    ];
    return keywords.some((kw) => url.includes(kw) || title.includes(kw));
  }

  private setupMessageListener() {
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'ANALYZE_PAGE') {
          this.runAnalysis(true).then((report) => {
            sendResponse({ success: true, report });
          });
          return true; // Keep channel open for async response
        }

        if (request.action === 'GET_CURRENT_REPORT') {
          sendResponse({ report: this.currentReport });
          return false;
        }

        if (request.action === 'SCROLL_TO_RISK') {
          DOMHighlighter.scrollToQuote(request.riskId);
          sendResponse({ success: true });
          return false;
        }

        if (request.action === 'EXECUTE_PAGE_AGENT_ACTION') {
          this.pageAgentBridge.executeAgentAction(request.command).then((msg) => {
            sendResponse({ success: true, message: msg });
          });
          return true;
        }
      });
    }
  }

  public async runAnalysis(showFullModal: boolean = false): Promise<ToSRiskReport | null> {
    try {
      this.renderLoadingPill();

      const extracted = this.pageAgentBridge.extractAgreementFromDOM();
      const securityInspection = SecurityGuard.inspectUntrustedContent(extracted.rawText);

      // Analyze via LLM / Mock Engine
      const rawLLMResult = await this.llmClient.analyzeDocument(extracted.rawText, extracted.url);

      // Deterministic Verification: Alıntısı olmayan iddia geçersiz sayılır!
      const verification = DeterministicValidator.validateAndBuildReport({
        rawResponse: rawLLMResult,
        originalDocumentText: extracted.rawText,
        siteUrl: extracted.url,
        securityAudit: securityInspection.audit,
      });

      if (!verification.valid || !verification.report) {
        console.error('[Jev Sentinel] Doğrulama hatası:', verification.errors);
        this.renderErrorPill('Analiz doğrulanamadı.');
        return null;
      }

      this.currentReport = verification.report;

      // Broadcast report to background/popup
      if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({
          action: 'REPORT_UPDATED',
          report: this.currentReport,
        });
      }

      // Highlight verified quotes directly in DOM
      DOMHighlighter.highlightRiskyClauses(this.currentReport.risky_items);

      // Render Floating Jev Reflex Pill & Drawer
      this.renderJevReflexWidget(this.currentReport, showFullModal);

      return this.currentReport;
    } catch (err: any) {
      console.error('[Jev Sentinel] Hata:', err);
      this.renderErrorPill(err.message || 'Analiz sırasında hata oluştu.');
      return null;
    }
  }

  private renderLoadingPill() {
    this.removeWidget();
    const pill = document.createElement('div');
    pill.id = 'jev-sentinel-pill';
    pill.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; font-family: system-ui, sans-serif; font-size: 13px; font-weight: 600; color: #fff; background: #0f172a; padding: 8px 14px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(0,0,0,0.3); border: 1px solid #38bdf8; z-index: 9999999; position: fixed; top: 20px; right: 20px; cursor: pointer;">
        <span style="display: inline-block; animation: spin 1s linear infinite;">⚡</span>
        <span>JEV & Alibaba Page-Agent Taramada...</span>
      </div>
    `;
    document.body.appendChild(pill);
    this.widgetContainer = pill;
  }

  private renderErrorPill(msg: string) {
    this.removeWidget();
    const pill = document.createElement('div');
    pill.id = 'jev-sentinel-pill';
    pill.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; font-family: system-ui, sans-serif; font-size: 13px; font-weight: 600; color: #fff; background: #7f1d1d; padding: 8px 14px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(0,0,0,0.3); border: 1px solid #ef4444; z-index: 9999999; position: fixed; top: 20px; right: 20px;">
        <span>⚠️ JEV:</span>
        <span>${msg}</span>
      </div>
    `;
    document.body.appendChild(pill);
    this.widgetContainer = pill;
  }

  private renderJevReflexWidget(report: ToSRiskReport, openDrawer: boolean = false) {
    this.removeWidget();

    const isCritical = report.risk_level === 'CRITICAL' || report.security_audit.prompt_injection_detected;
    const isHigh = report.risk_level === 'HIGH';
    const isMedium = report.risk_level === 'MEDIUM';

    const pillBg = isCritical ? '#7f1d1d' : isHigh ? '#7c2d12' : isMedium ? '#713f12' : '#064e3b';
    const borderColor = isCritical ? '#ef4444' : isHigh ? '#f97316' : isMedium ? '#eab308' : '#10b981';
    const icon = isCritical ? '🛑' : isHigh ? '⚠️' : isMedium ? '🟡' : '🛡️';

    const container = document.createElement('div');
    container.id = 'jev-sentinel-container';
    container.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 99999999; font-family: system-ui, -apple-system, sans-serif;';

    // The Floating Pill
    const pill = document.createElement('div');
    pill.id = 'jev-floating-pill';
    pill.style.cssText = `
      display: flex; align-items: center; gap: 10px; padding: 10px 16px;
      background: ${pillBg}; border: 1.5px solid ${borderColor}; border-radius: 9999px;
      color: #fff; font-size: 13px; font-weight: 700; cursor: pointer;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4), 0 0 15px ${borderColor}44;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    `;
    pill.innerHTML = `
      <span style="font-size: 16px;">${icon}</span>
      <span>${report.jev_reflex.headline}</span>
      <span style="background: rgba(0,0,0,0.4); padding: 2px 8px; border-radius: 999px; font-size: 11px;">Skor: ${report.risk_score}</span>
    `;

    // Drawer / Modal overlay
    const drawer = document.createElement('div');
    drawer.id = 'jev-reflex-drawer';
    drawer.style.cssText = `
      display: ${openDrawer ? 'block' : 'none'};
      width: 420px; max-height: 80vh; overflow-y: auto;
      background: #090d16; border: 1px solid ${borderColor}; border-radius: 12px;
      margin-top: 10px; padding: 18px; color: #f1f5f9;
      box-shadow: 0 20px 30px rgba(0,0,0,0.7);
    `;

    let riskyClausesHtml = report.risky_items
      .map(
        (item) => `
      <div style="background: #131c2e; border: 1px solid #1e293b; border-left: 4px solid ${
        item.risk_weight === 'CRITICAL' ? '#ef4444' : item.risk_weight === 'HIGH' ? '#f97316' : '#eab308'
      }; border-radius: 6px; padding: 10px; margin-bottom: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-size: 11px; font-weight: 800; color: #38bdf8;">${item.id} · ${item.category}</span>
          <span style="font-size: 10px; font-weight: 700; background: #000; padding: 2px 6px; border-radius: 4px;">${item.risk_weight}</span>
        </div>
        <div style="font-size: 12px; color: #f8fafc; font-weight: 600; margin-bottom: 6px;">
          ${item.sade_turkce_aciklama}
        </div>
        <div style="font-size: 11px; color: #94a3b8; font-style: italic; background: #0b1120; padding: 6px; border-radius: 4px; margin-bottom: 6px;">
          "${item.quote}"
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #64748b;">
          <span>⚖️ ${item.kvkk_article_reference}</span>
          <button class="jev-btn-scroll" data-risk-id="${item.id}" style="background: #1e293b; color: #38bdf8; border: 1px solid #334155; padding: 2px 8px; border-radius: 4px; font-size: 10px; cursor: pointer;">Metinde Gör</button>
        </div>
      </div>
    `
      )
      .join('');

    if (report.risky_items.length === 0) {
      riskyClausesHtml = '<div style="color: #10b981; font-size: 13px; text-align: center; padding: 15px;">Tebrikler! Belirgin bir riskli madde bulunamadı.</div>';
    }

    let ambiguitySection = '';
    if (report.ambiguity_analysis.has_ambiguity) {
      const missingList = report.ambiguity_analysis.missing_information
        .map((m) => `<li>${m}</li>`)
        .join('');

      ambiguitySection = `
        <div id="ambiguity-box" style="background: #2a1b06; border: 1px solid #eab308; border-radius: 6px; padding: 10px; margin-bottom: 12px;">
          <div style="font-size: 11px; font-weight: 800; color: #eab308; margin-bottom: 4px;">🧐 DÜRÜST BELİRSİZLİK ANALİZİ</div>
          <div id="ambiguity-explanation" style="font-size: 12px; color: #fef08a; margin-bottom: 6px;">${report.ambiguity_analysis.explanation}</div>
          <ul id="ambiguity-missing-list" style="padding-left: 18px; font-size: 11px; color: #fef9c3; margin: 0;">
            ${missingList}
          </ul>
        </div>
      `;
    }

    let securitySection = '';
    if (report.security_audit.prompt_injection_detected) {
      securitySection = `
        <div style="background: #450a0a; border: 1px solid #ef4444; border-radius: 6px; padding: 10px; margin-bottom: 12px;">
          <div style="font-size: 11px; font-weight: 800; color: #f87171; margin-bottom: 4px;">🚨 ADVERSARIAL PROMPT INJECTION ENGELLENDİ</div>
          <div style="font-size: 12px; color: #fecaca;">Sayfada sistemi aldatmaya yönelik gizli komut yakalandı: <code>${report.security_audit.injection_payload_found}</code></div>
        </div>
      `;
    }

    drawer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div style="font-size: 14px; font-weight: 800; color: #38bdf8; display: flex; align-items: center; gap: 6px;">
          ⚡ JEV x Alibaba Page-Agent
        </div>
        <button id="jev-drawer-close" style="background: transparent; border: none; color: #94a3b8; font-size: 16px; cursor: pointer;">✕</button>
      </div>

      <!-- Legal Disclaimer (Mandatory) -->
      <div style="background: #1e1b4b; border: 1px solid #6366f1; border-radius: 6px; padding: 8px; font-size: 11px; color: #c7d2fe; margin-bottom: 12px; font-weight: 500;">
        ${report.legal_disclaimer}
      </div>

      <div style="font-size: 13px; font-weight: 700; color: #f8fafc; margin-bottom: 6px;">
        ${report.jev_reflex.one_liner_reflex}
      </div>
      <div style="font-size: 12px; color: #94a3b8; margin-bottom: 14px;">
        👉 <strong>Tavsiye:</strong> ${report.jev_reflex.immediate_advice}
      </div>

      ${securitySection}
      ${ambiguitySection}

      <div style="font-size: 12px; font-weight: 700; color: #cbd5e1; margin-bottom: 8px;">
        DOĞRULANMIŞ RİSKLİ MADDELER (${report.risky_items.length}):
      </div>
      <div>
        ${riskyClausesHtml}
      </div>
    `;

    pill.addEventListener('click', () => {
      drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
    });

    container.appendChild(pill);
    container.appendChild(drawer);
    document.body.appendChild(container);
    this.widgetContainer = container;

    // Attach scroll buttons inside drawer
    drawer.querySelectorAll('.jev-btn-scroll').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-risk-id');
        if (id) DOMHighlighter.scrollToQuote(id);
      });
    });

    const closeBtn = drawer.querySelector('#jev-drawer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        drawer.style.display = 'none';
      });
    }
  }

  private removeWidget() {
    if (this.widgetContainer) {
      this.widgetContainer.remove();
      this.widgetContainer = null;
    }
    const existing = document.getElementById('jev-sentinel-container');
    if (existing) existing.remove();
    const existingPill = document.getElementById('jev-sentinel-pill');
    if (existingPill) existingPill.remove();
  }
}

// Instantiate Sentinel in webpage
if (typeof window !== 'undefined') {
  new JevContentSentinel();
}
