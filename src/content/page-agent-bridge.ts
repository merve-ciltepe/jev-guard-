import { LLMConfig } from '../core/llm-client';

export interface ExtractedAgreement {
  title: string;
  url: string;
  rawText: string;
  charCount: number;
  sourceElementSelector: string;
}

/**
 * Alibaba PageAgent Integration Bridge
 * Connects Alibaba's in-page agent runtime to our Sentinel & Jev reflex engine.
 */
export class AlibabaPageAgentBridge {
  private config: LLMConfig;
  private agentInstance: any = null;

  constructor(config: LLMConfig) {
    this.config = config;
  }

  /**
   * Initializes Alibaba PageAgent if running in supported browser context
   */
  public async initialize(): Promise<void> {
    try {
      if (typeof window !== 'undefined' && this.config.apiKey) {
        // Dynamically load PageAgent in browser environment
        const { PageAgent } = await import('page-agent');
        this.agentInstance = new PageAgent({
          model: this.config.model,
          baseURL: this.config.baseURL,
          apiKey: this.config.apiKey,
        });
      }
    } catch (err) {
      console.warn('[Alibaba PageAgent] Headless initialization fallback:', err);
    }
  }

  /**
   * Reads page DOM as structured text, identifies agreement/ToS content containers
   */
  public extractAgreementFromDOM(): ExtractedAgreement {
    const url = window.location.href;
    const title = document.title || 'Web Sayfası';

    // Priority candidate selectors for Terms, Privacy, Modal containers
    const candidates = [
      'article',
      'main',
      '.terms-content',
      '#terms-content',
      '.privacy-policy',
      '#privacy-policy',
      '.policy-container',
      '.legal-document',
      '[role="main"]',
      '.modal-body',
      '.dialog-content',
    ];

    let bestElement: HTMLElement | null = null;
    let maxTextLength = 0;
    let bestSelector = 'body';

    for (const selector of candidates) {
      const elements = document.querySelectorAll<HTMLElement>(selector);
      elements.forEach((el) => {
        const text = (el.innerText || el.textContent || '').trim();
        if (text.length > maxTextLength) {
          maxTextLength = text.length;
          bestElement = el;
          bestSelector = selector;
        }
      });
    }

    if (!bestElement || maxTextLength < 200) {
      bestElement = document.body;
      bestSelector = 'body';
    }

    // Clean text: strip noisy script/style/nav text
    const clone = bestElement.cloneNode(true) as HTMLElement;
    const elementsToRemove = clone.querySelectorAll('script, style, noscript, svg, nav, footer');
    elementsToRemove.forEach((el) => el.remove());

    const rawText = (clone.innerText || clone.textContent || '')
      .replace(/\s+/g, ' ')
      .trim();

    return {
      title,
      url,
      rawText,
      charCount: rawText.length,
      sourceElementSelector: bestSelector,
    };
  }

  /**
   * Executes a natural language protective command on the live page via Alibaba PageAgent
   */
  public async executeAgentAction(command: string): Promise<string> {
    if (this.agentInstance && typeof this.agentInstance.execute === 'function') {
      try {
        const result = await this.agentInstance.execute(command);
        return `✅ Alibaba PageAgent Eylemi Tamamlandı: ${JSON.stringify(result)}`;
      } catch (err: any) {
        return `⚠️ PageAgent Eylem Hatası: ${err.message}`;
      }
    }

    // Fallback deterministic action executor if no active API key for PageAgent
    return this.fallbackDOMAction(command);
  }

  private fallbackDOMAction(command: string): string {
    const cmdLower = command.toLowerCase();
    if (cmdLower.includes('kaydır') || cmdLower.includes('scroll')) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return 'Sayfa ilgili bölüme kaydırıldı.';
    }
    return `Komut simüle edildi: ${command}`;
  }
}
