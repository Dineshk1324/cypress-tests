describe('Basic elements handling', () => {
  it('Selects Australia, clears, then selects India from autocomplete dropdown', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Select Option2 from dropdown
    cy.get('select').select('Option2').should('have.value', 'option2');

    // --- Step 1: Type 'Aus' and select 'Australia'
    cy.get('#autocomplete').clear().type('Aus');

    cy.get('li.ui-menu-item div').should('be.visible').each(($country) => {
      if ($country.text().trim() === 'Australia') {
        cy.wrap($country).click({ force: true });
      }
    });

    // Assert Australia is selected
    cy.get('#autocomplete').should('have.value', 'Australia');

    // --- Step 2: Clear and select 'India'
    cy.get('#autocomplete').clear().type('Ind');

    cy.get('li.ui-menu-item div').should('be.visible').each(($country) => {
      if ($country.text().trim() === 'India') {
        cy.wrap($country).click({ force: true });
      }
    });

    // ✅ Final assertion
    cy.get('#autocomplete').should('have.value', 'India');
  });
});
