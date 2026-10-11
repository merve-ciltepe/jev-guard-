import { ToSRiskReport, RiskyItem } from '../core/schema';

document.addEventListener('DOMContentLoaded', async () => {
  const loadingState = document.getElementById('loading-state')!;
  const emptyState = document.getElementById('empty-state')!;
  const reportState = document.getElementById('report-state')!;

  const btnScanNow = document.getElementById('btn-scan-now')!;
  const btnRescan = document.getElementById('btn-rescan')!;
  const btnOptions = document.getElementById('btn-options')!;
  const btnOpenMcp = document.getElementById('btn-open-mcp')!;

  const scoreNumber = document.getElementById('score-number')!;
  const scoreCircle = document.getElementById('score-circle')!;
  const riskLevelBadge = document.getElementById('risk-level-badge')!;
  const docTypeText = document.getElementById('doc-type-text')!;
  const rejectedClaimsBadge = document.getElementById('rejected-claims-badge')!;

  const reflexHeadline = document.getElementById('reflex-headline')!;
  const reflexOneliner = document.getElementById('reflex-oneliner')!;
  const reflexAdvice = document.getElementById('reflex-advice')!;

  const securityAlertBox = document.getElementById('security-alert-box')!;
  const securityAlertMsg = document.getElementById('security-alert-msg')!;

  const ambiguityAlertBox = document.getElementById('ambiguity-alert-box')!;
  const ambiguityAlertMsg = document.getElementById('ambiguity-alert-msg')!;
  const ambiguityMissingList = document.getElementById('ambiguity-missing-list')!;

  const clausesCount = document.getElementById('clauses-count')!;
  const clausesList = document.getElementById('clauses-list')!;

  // Open Options page
  btnOptions.addEventListener('click', () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('src/options/options.html'));
    }
  });

  btnOpenMcp.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });

  // Get active tab
  async function getActiveTab(): Promise<chrome.tabs.Tab | null> {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    return tabs[0] || null;
  }

  // Trigger analysis on active tab
  async function triggerAnalysis() {
    emptyState.classList.add('hidden');
    reportState.classList.add('hidden');
    loadingState.classList.remove('hidden');

    const tab = await getActiveTab();
    if (!tab?.id) {
      loadingState.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    }

    try {
      chrome.tabs.sendMessage(tab.id, { action: 'ANALYZE_PAGE' }, (response) => {
        loadingState.classList.add('hidden');
        if (response && response.report) {
          renderReport(response.report);
        } else {
          emptyState.classList.remove('hidden');
        }
      });
    } catch (err) {
      loadingState.classList.add('hidden');
      emptyState.classList.remove('hidden');
    }
  }

  btnScanNow.addEventListener('click', triggerAnalysis);
  btnRescan.addEventListener('click', triggerAnalysis);

  // Render Risk Report
  function renderReport(report: ToSRiskReport) {
    emptyState.classList.add('hidden');
    loadingState.classList.add('hidden');
    reportState.classList.remove('hidden');

    scoreNumber.textContent = String(report.risk_score);
    docTypeText.textContent = report.document_type;
    riskLevelBadge.textContent = `${report.risk_level} RİSK`;

    // Colors
    let color = '#10b981';
    if (report.risk_level === 'CRITICAL') color = '#ef4444';
    else if (report.risk_level === 'HIGH') color = '#f97316';
    else if (report.risk_level === 'MEDIUM') color = '#eab308';

    scoreCircle.style.borderColor = color;
    scoreCircle.style.boxShadow = `0 0 15px ${color}33`;
    riskLevelBadge.style.color = color;
    riskLevelBadge.style.borderColor = color;
    riskLevelBadge.style.background = `${color}22`;

    // Rejected Claims badge
    if (report.unverified_claims_rejected_count > 0) {
      rejectedClaimsBadge.textContent = `Alıntısız ${report.unverified_claims_rejected_count} iddia geçersiz sayıldı`;
      rejectedClaimsBadge.classList.remove('hidden');
    } else {
      rejectedClaimsBadge.classList.add('hidden');
    }

    // Jev Reflex
    reflexHeadline.textContent = report.jev_reflex.headline;
    reflexOneliner.textContent = report.jev_reflex.one_liner_reflex;
    reflexAdvice.textContent = report.jev_reflex.immediate_advice;

    // Security Alert (Prompt Injection)
    if (report.security_audit.prompt_injection_detected) {
      securityAlertBox.classList.remove('hidden');
      securityAlertMsg.textContent = `Sayfa metninde yapay zekayı aldatmaya yönelik şu talimat tespit edildi: "${report.security_audit.injection_payload_found}". Sistem saldırıyı engelledi!`;
    } else {
      securityAlertBox.classList.add('hidden');
    }

    // Ambiguity / Honesty Alert
    if (report.ambiguity_analysis.has_ambiguity) {
      ambiguityAlertBox.classList.remove('hidden');
      ambiguityAlertMsg.textContent = report.ambiguity_analysis.explanation;
      ambiguityMissingList.innerHTML = '';
      report.ambiguity_analysis.missing_information.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ambiguityMissingList.appendChild(li);
      });
    } else {
      ambiguityAlertBox.classList.add('hidden');
    }

    // Risky Items
    clausesCount.textContent = String(report.risky_items.length);
    clausesList.innerHTML = '';

    report.risky_items.forEach((item: RiskyItem) => {
      const card = document.createElement('div');
      card.className = `clause-card ${item.risk_weight.toLowerCase()}`;
      card.innerHTML = `
        <div class="clause-top">
          <span class="clause-id">${item.id} · ${item.category}</span>
          <span class="clause-weight">${item.risk_weight}</span>
        </div>
        <div class="clause-desc">${item.sade_turkce_aciklama}</div>
        <div class="clause-quote-box">"${item.quote}"</div>
        <div class="clause-footer">
          <span>⚖️ ${item.kvkk_article_reference}</span>
          <button class="btn-show-in-page" data-risk-id="${item.id}">Sayfada Gör</button>
        </div>
      `;
      clausesList.appendChild(card);
    });

    // Attach click events for "Sayfada Gör" buttons
    clausesList.querySelectorAll('.btn-show-in-page').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const riskId = (e.currentTarget as HTMLElement).getAttribute('data-risk-id');
        const tab = await getActiveTab();
        if (tab?.id && riskId) {
          chrome.tabs.sendMessage(tab.id, { action: 'SCROLL_TO_RISK', riskId });
        }
      });
    });
  }

  // Initial check: is there a report already cached?
  const tab = await getActiveTab();
  if (tab?.id) {
    chrome.tabs.sendMessage(tab.id, { action: 'GET_CURRENT_REPORT' }, (res) => {
      if (res && res.report) {
        renderReport(res.report);
      }
    });
  }
});
