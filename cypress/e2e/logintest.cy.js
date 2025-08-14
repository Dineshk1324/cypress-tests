describe(' Pratice Automation Login test',()=>{
    it('Test case 1: Positive LogIn test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('input[id="username"]').type('student');
        cy.get('input[id="password"]').type('Password123');
        cy.get('button[id="submit"]').click();
        cy.url().should('eq','https://practicetestautomation.com/logged-in-successfully/');
        cy.get('h1').should('contain', 'Logged In Successfully');
        cy.get('p').should('have.text', 'Congratulations student. You successfully logged in!');
        cy.xpath('//a[contains(text(),"Log out")]').click();
    });

    it('Test case 2: Negative username test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('input[id="username"]').type('incorrectUser');
        cy.get('input[id="password"]').type('Password123');
        cy.get('button[id="submit"]').click();
        cy.get('[id="error"]').should('be.visible');
        cy.get('[id="error"]').should('have.text','Your username is invalid!');
    });

    it('Test case 3: Negative password test',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.get('input[id="username"]').type('student');
        cy.get('input[id="password"]').type('incorrectPassword');
        cy.get('button[id="submit"]').click();
        cy.get('[id="error"]').should('be.visible');
        cy.get('[id="error"]').should('have.text','Your password is invalid!');
    });
});