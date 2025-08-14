describe('Basic elements handling', () => {
    it('Validates basic elements', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[type="radio"]').check('radio1').should('be.checked');
        cy.get('input[type="radio"]').check('radio3').should('be.checked');
    });
});