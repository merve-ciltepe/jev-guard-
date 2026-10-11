import { DEFAULT_KVKK_RULES, DEFAULT_USER_RULES, KVKKArticle, UserRulePreference } from '../core/kvkk-rules';
import { DeterministicValidator } from '../core/validator';
import { SecurityGuard, SecurityInspectionResult } from '../core/security';

/**
 * MCP Context Bridge:
 * Provides an MCP protocol abstraction layer for both Chrome Extension runtime
 * and external agent environments.
 */
export class MCPContextBridge {
  private kvkkRules: KVKKArticle[] = DEFAULT_KVKK_RULES;
  private userRules: UserRulePreference[] = DEFAULT_USER_RULES;

  constructor() {}

  /**
   * Fetches KVKK compliance matrix via MCP resource tos://kvkk-matrix
   */
  public async getKVKKMatrix(): Promise<KVKKArticle[]> {
    return this.kvkkRules;
  }

  /**
   * Fetches user defense rules via MCP resource tos://user-rules
   */
  public async getUserRules(): Promise<UserRulePreference[]> {
    return this.userRules;
  }

  /**
   * Updates user defense rules in MCP context
   */
  public async updateUserRules(rules: UserRulePreference[]): Promise<void> {
    this.userRules = rules;
  }

  /**
   * Executes MCP tool 'verify_quote'
   */
  public async verifyQuote(quote: string, documentText: string): Promise<{ verified: boolean; matchScore: number }> {
    return DeterministicValidator.verifyQuoteInDocument(quote, documentText);
  }

  /**
   * Executes MCP tool 'check_prompt_injection'
   */
  public async checkPromptInjection(text: string): Promise<SecurityInspectionResult> {
    return SecurityGuard.inspectUntrustedContent(text);
  }
}

export const mcpBridge = new MCPContextBridge();
