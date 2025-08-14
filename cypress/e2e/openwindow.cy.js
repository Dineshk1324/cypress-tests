describe('Handle Open Window with Cross-Origin in Cypress', () => {
  it.only('Open Window',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     cy.window().then((win)=>{
            cy.stub(win,'open').as('dinesh');
        });
    cy.get('#openwindow').click();
    cy.get('@dinesh').should('be.called').then((stub)=>{
        const newUrl = stub.getCall(0).args[0];
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.visit('/');
            cy.get('h2').should('contain.text', 'Best platform to learn Software and Automation Testing');
            cy.url('https://www.qaclickacademy.com/').should('include', 'qaclickacademy');
        });
    });
    });
});
