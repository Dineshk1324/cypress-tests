describe('dropdownbox check',()=>{
    it('Dropdown Example',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select[id="dropdown-class-example"]').select('option2').should('have.value','option2');
        cy.get('select[id="dropdown-class-example"]').select('option3').should('have.value','option3');
    });
});