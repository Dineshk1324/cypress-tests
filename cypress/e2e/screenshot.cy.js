Cypress.on('uncaught:exception', () => false);

describe('Amazon - Search and filter Samsung mobiles', () => {

    
  it('Searches Mobiles under 15000 and filters Samsung', () => {
    // Visit Amazon India
    cy.visit('https://www.amazon.in');

    // Search for mobiles under 15000
    cy.get('#twotabsearchtextbox')
      .type('Mobiles under 15000{enter}');

    // Wait for results to load
    cy.wait(3000);
    cy.screenshot('search-results');

    // Scroll to filters section
    cy.scrollTo('bottom');

    // Apply Samsung brand filter if visible
    cy.contains('Samsung')
      .scrollIntoView()
      .click({ force: true });

    // Wait and take screenshot after filtering
    cy.wait(3000);
    cy.screenshot('filtered-samsung-mobiles');
  });
});
