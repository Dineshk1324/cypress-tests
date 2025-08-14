describe('buttons and checkbox test',()=>{
    it('radio buttons',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[name="radioButton"]').check('radio1').should('be.checked');
        cy.get('input[name="radioButton"]').check('radio3').should('be.checked');
        cy.get('input[name="radioButton"]').check('radio2').should('be.checked');
    });
    
    it('checkboxes',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[type="checkbox"]').check(['option1','option3']).should('be.checked');
        cy.get('input[type="checkbox"]').uncheck(['option1']).should('not.be.checked');
    });
});