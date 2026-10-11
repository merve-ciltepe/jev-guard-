// Cypress custom commands
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to wait for Jev reflex pill
       */
      waitForJevSentinel(): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('waitForJevSentinel', () => {
  return cy.get('#jev-floating-pill', { timeout: 10000 }).should('be.visible');
});

export {};
