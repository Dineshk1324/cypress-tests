Cypress.on('uncaught:exception', () => false);
describe('Amazon - Search Samsung Mobiles under 15000', () => {
   before(() => {
      cy.viewport(1280, 720);
    });
    
  it('Search and filter Samsung mobiles', () => {
    cy.visit('https://www.amazon.in/');
    cy.get('#twotabsearchtextbox').type('Mobiles under 15000');
    cy.get('#nav-search-submit-button').click();
    cy.contains('span', 'Samsung').click();
    cy.get('#productTitle', { timeout: 10000 }).should('be.visible').invoke('text').should('match', /samsung/i);
  });
});
