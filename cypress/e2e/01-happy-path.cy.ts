describe('JEV x Alibaba Page-Agent: ToS Sentinel - Mutlu Yol (Happy Path)', () => {
  beforeEach(() => {
    // Visit local fixture demo page
    cy.visit('cypress/fixtures/demo-terms.html');
  });

  it('Sayfaya girildiğinde Alibaba PageAgent DOM okur ve Jev Refleks hapı anında belirir', () => {
    // 1. Fast reflex pill must appear
    cy.get('#jev-floating-pill', { timeout: 8000 })
      .should('be.visible')
      .and('contain', 'JEV REFLEKS');

    // 2. Risk score is computed and shown
    cy.get('#pill-score').should('be.visible').and('contain', 'Skor:');
  });

  it('Hapa tıklandığında Jev detay çekmecesi açılır, yasal uyarı ve doğrulanmış alıntılar görünür', () => {
    // Click floating reflex pill
    cy.get('#jev-floating-pill', { timeout: 8000 }).click();

    // 1. Drawer must open
    cy.get('#jev-reflex-drawer').should('be.visible');

    // 2. Mandatory Legal Disclaimer must be clearly visible
    cy.get('#legal-disclaimer')
      .should('be.visible')
      .and('contain', 'hukuki tavsiye vermez');

    // 3. Jev blunt reflex advice must be present
    cy.get('#reflex-oneliner').should('be.visible');
    cy.get('#reflex-advice').should('be.visible');

    // 4. Risky clauses with exact verified quotes
    cy.get('.clause-item').should('have.length.at.least', 2);
    cy.get('.clause-quote').first().should('be.visible');
  });

  it('Metinde Gör butonuna tıklandığında sayfa kaydırılır ve DOM içinde alıntı vurgulanır', () => {
    cy.get('#jev-floating-pill', { timeout: 8000 }).click();

    // Click "Metinde Gör"
    cy.get('.jev-btn-scroll').first().click();

    // In-page highlight mark must be active
    cy.get('.jev-verified-risk-highlight')
      .should('exist')
      .and('be.visible');
  });
});
