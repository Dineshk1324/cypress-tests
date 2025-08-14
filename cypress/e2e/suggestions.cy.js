describe('Basic elements handling', () => {
  it('Validates basic elements', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Dropdown select
    cy.get('select').select('Option2')
      .should('have.value', 'option2');

    // Auto-suggestive dropdown
    cy.get('input#autocomplete').type('Aus');

    cy.get('li.ui-menu-item div').each(($country) => {
      if ($country.text() === 'Australia') {
        cy.wrap($country).click({ force: true });
      }
    });
  });
});
