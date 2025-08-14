describe('checkbox',() => {
    it('select checkbox',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[type="checkbox"]').check(['option3','option2']).should('be.checked');
    })
})