import { RiskyItem } from '../core/schema';

export class DOMHighlighter {
  private static highlightClass = 'jev-verified-risk-highlight';

  /**
   * Highlights verified quotes directly in the DOM
   */
  public static highlightRiskyClauses(items: RiskyItem[]): void {
    this.removeExistingHighlights();

    items.forEach((item) => {
      if (!item.quote_verified || item.quote.length < 8) return;

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      let node: Text | null;

      // Find first text node containing part of the quote
      while ((node = walker.nextNode() as Text | null)) {
        if (!node.textContent || node.parentElement?.closest(`.${this.highlightClass}`)) {
          continue;
        }

        const normNodeText = node.textContent.toLowerCase();
        const normSnippet = item.quote.slice(0, 35).toLowerCase();

        if (normNodeText.includes(normSnippet)) {
          const parent = node.parentElement;
          if (!parent) continue;

          const span = document.createElement('mark');
          span.className = `${this.highlightClass} jev-risk-${item.risk_weight.toLowerCase()}`;
          span.setAttribute('data-risk-id', item.id);
          span.setAttribute('data-category', item.category);
          span.title = `[JEV UYARISI - ${item.risk_weight}] ${item.sade_turkce_aciklama}`;
          span.textContent = node.textContent;

          // Inline styling to guarantee visual pop
          span.style.backgroundColor =
            item.risk_weight === 'CRITICAL'
              ? 'rgba(239, 68, 68, 0.35)'
              : item.risk_weight === 'HIGH'
              ? 'rgba(249, 115, 22, 0.35)'
              : 'rgba(234, 179, 8, 0.35)';
          span.style.borderBottom =
            item.risk_weight === 'CRITICAL'
              ? '2px solid #ef4444'
              : item.risk_weight === 'HIGH'
              ? '2px solid #f97316'
              : '2px solid #eab308';
          span.style.borderRadius = '2px';
          span.style.padding = '1px 3px';
          span.style.cursor = 'pointer';

          parent.replaceChild(span, node);
          break;
        }
      }
    });
  }

  /**
   * Cleans up existing highlights
   */
  public static removeExistingHighlights(): void {
    const highlights = document.querySelectorAll(`.${this.highlightClass}`);
    highlights.forEach((el) => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });
  }

  /**
   * Scrolls smoothly to a highlighted quote in page
   */
  public static scrollToQuote(riskId: string): void {
    const el = document.querySelector(`[data-risk-id="${riskId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (el as HTMLElement).style.outline = '3px solid #ef4444';
      setTimeout(() => {
        (el as HTMLElement).style.outline = '';
      }, 2000);
    }
  }
}
