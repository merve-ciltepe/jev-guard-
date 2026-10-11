import { ToSRiskReport } from '../core/schema';

chrome.runtime.onInstalled.addListener(() => {
  console.log('[JEV x Alibaba Page-Agent ToS Sentinel] Eklenti yüklendi.');
  chrome.action.setBadgeText({ text: 'JEV' });
  chrome.action.setBadgeBackgroundColor({ color: '#0284c7' });
});

// Update badge when a report is received
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'REPORT_UPDATED' && sender.tab?.id) {
    const report: ToSRiskReport = message.report;
    const tabId = sender.tab.id;

    const score = report.risk_score;
    let badgeColor = '#10b981'; // Green
    if (score >= 75) badgeColor = '#ef4444'; // Red
    else if (score >= 50) badgeColor = '#f97316'; // Orange
    else if (score >= 25) badgeColor = '#eab308'; // Yellow

    chrome.action.setBadgeText({ tabId, text: String(score) });
    chrome.action.setBadgeBackgroundColor({ tabId, color: badgeColor });

    // Save to storage
    chrome.storage.local.set({ [`report_${tabId}`]: report });
    sendResponse({ success: true });
    return false;
  }
});
