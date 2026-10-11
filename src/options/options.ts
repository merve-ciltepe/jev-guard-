import { DEFAULT_KVKK_RULES, DEFAULT_USER_RULES, UserRulePreference } from '../core/kvkk-rules';
import { DEFAULT_LLM_CONFIG, LLMConfig } from '../core/llm-client';

document.addEventListener('DOMContentLoaded', () => {
  const providerSelect = document.getElementById('llm-provider') as HTMLSelectElement;
  const apiKeyInput = document.getElementById('llm-api-key') as HTMLInputElement;
  const baseUrlInput = document.getElementById('llm-base-url') as HTMLInputElement;
  const modelInput = document.getElementById('llm-model') as HTMLInputElement;

  const userRulesContainer = document.getElementById('user-rules-container')!;
  const kvkkContainer = document.getElementById('kvkk-container')!;
  const btnSave = document.getElementById('btn-save')!;
  const saveStatus = document.getElementById('save-status')!;

  let currentRules = [...DEFAULT_USER_RULES];

  // Provider change preset URLs
  providerSelect.addEventListener('change', () => {
    const val = providerSelect.value;
    if (val === 'gemini') {
      baseUrlInput.value = 'https://generativelanguage.googleapis.com/v1beta/openai/';
      modelInput.value = 'gemini-1.5-flash';
    } else if (val === 'openai') {
      baseUrlInput.value = 'https://api.openai.com/v1';
      modelInput.value = 'gpt-4o-mini';
    } else if (val === 'qwen') {
      baseUrlInput.value = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';
      modelInput.value = 'qwen-plus';
    } else if (val === 'ollama') {
      baseUrlInput.value = 'http://localhost:11434/v1';
      modelInput.value = 'llama3';
    } else {
      baseUrlInput.value = 'local://mock';
      modelInput.value = 'mock-deterministic';
    }
  });

  // Render User Rules
  function renderUserRules(rules: UserRulePreference[]) {
    userRulesContainer.innerHTML = '';
    rules.forEach((rule) => {
      const item = document.createElement('div');
      item.className = 'rule-item';
      item.innerHTML = `
        <input type="checkbox" id="rule-${rule.id}" ${rule.enabled ? 'checked' : ''} />
        <div>
          <div class="rule-title">${rule.name}</div>
          <div class="rule-desc">${rule.description}</div>
        </div>
      `;
      const checkbox = item.querySelector('input')!;
      checkbox.addEventListener('change', () => {
        rule.enabled = checkbox.checked;
      });
      userRulesContainer.appendChild(item);
    });
  }

  // Render KVKK Matrix
  function renderKVKKMatrix() {
    kvkkContainer.innerHTML = '';
    DEFAULT_KVKK_RULES.forEach((art) => {
      const card = document.createElement('div');
      card.className = 'kvkk-card';
      card.innerHTML = `
        <div class="kvkk-name">${art.name}</div>
        <div class="kvkk-summary">${art.summary}</div>
      `;
      kvkkContainer.appendChild(card);
    });
  }

  // Load Saved Settings
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
    chrome.storage.sync.get(['llmConfig', 'userRules'], (data) => {
      if (data.llmConfig) {
        const cfg = data.llmConfig as LLMConfig;
        providerSelect.value = cfg.provider || 'mock';
        apiKeyInput.value = cfg.apiKey || '';
        baseUrlInput.value = cfg.baseURL || DEFAULT_LLM_CONFIG.baseURL;
        modelInput.value = cfg.model || DEFAULT_LLM_CONFIG.model;
      }
      if (data.userRules) {
        currentRules = data.userRules;
      }
      renderUserRules(currentRules);
    });
  } else {
    renderUserRules(currentRules);
  }

  renderKVKKMatrix();

  // Save Settings
  btnSave.addEventListener('click', () => {
    const configToSave: LLMConfig = {
      provider: providerSelect.value as any,
      apiKey: apiKeyInput.value.trim(),
      baseURL: baseUrlInput.value.trim(),
      model: modelInput.value.trim(),
      temperature: 0.1,
    };

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set(
        {
          llmConfig: configToSave,
          userRules: currentRules,
        },
        () => {
          saveStatus.textContent = '✓ Ayarlar başarıyla kaydedildi!';
          setTimeout(() => {
            saveStatus.textContent = '';
          }, 3000);
        }
      );
    } else {
      saveStatus.textContent = '✓ Ayarlar tarayıcı oturumuna kaydedildi!';
    }
  });
});
