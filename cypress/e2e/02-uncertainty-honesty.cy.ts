describe('JEV x Alibaba Page-Agent: ToS Sentinel - Belirsizliği Dürüstçe Gösterme (Uncertainty & Honesty)', () => {
  beforeEach(() => {
    cy.visit('cypress/fixtures/ambiguous-terms.html');
  });

  it('Muğlak ve şeffaf olmayan maddelerde sistem halüsinasyon görmez; dürüst belirsizlik refleksi üretir', () => {
    // 1. Floating pill appears with UNCERTAINTY reflex
    cy.get('#jev-floating-pill', { timeout: 8000 })
      .should('be.visible')
      .and('contain', 'BELİRSİZLİK');

    // 2. Click to open drawer
    cy.get('#jev-floating-pill').click();

    // 3. Honesty section is visible
    cy.get('#jev-reflex-drawer').should('be.visible');
    cy.get('#ambiguity-explanation')
      .should('be.visible')
      .and('contain', 'muğlak');

    // 4. Missing information items are listed explicitly
    cy.get('#ambiguity-missing-list li')
      .should('have.length.at.least', 1);

    // 5. Mandatory disclaimer is preserved
    cy.get('#legal-disclaimer')
      .should('be.visible')
      .and('contain', 'hukuki tavsiye vermez');
  });
});
