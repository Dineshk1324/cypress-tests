describe('Fixtures Example',()=>{
    it('Test case using fixtures',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.fixture('credentials').then((Data) => {
        cy.get('#username').should('be.visible','Username').type(Data.Username);
        cy.get('#password').should('be.visible','Password ').type(Data.Password);
        cy.get('#submit').should('be.visible','Submit ').click();
        cy.get('.post-title').should('contain', Data.expected);
        });
    });
});