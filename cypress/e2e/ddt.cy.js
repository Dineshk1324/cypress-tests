/// <reference types="cypress" />

describe('Login Functionality - Data Driven Tests', () => {
  it('Runs login tests using fixture data', () => {
    cy.fixture('credentials.json').then((loginData) => {
      loginData.forEach((testCase) => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');

        cy.get('#username').clear().type(testCase.username);
        cy.get('#password').clear().type(testCase.password);
        cy.get('#submit').click();

        if (testCase.expected === 'success') {
          cy.url().should('include', '/logged-in-successfully/');
          cy.contains('Log out').should('be.visible');
        } else {
          cy.get('#error')
            .should('be.visible')
            .and('have.text', testCase.expected);
        }

        cy.wait(500);

        cy.log(`Test case for username: ${testCase.username} completed`);        
        cy.log(`Test case for password: ${testCase.password} completed`);  
      });
      cy.log('Test case completed successfully');
    });
  });
});
