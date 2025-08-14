describe('Test Case 2: Invalid Username', () => {
  it('Should show error for invalid username with correct password', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('#username').type('wrongUser');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
    cy.get('.show').should('contain.text', 'Your username is invalid!');
    cy.url().should('include', '/practice-test-login');
  });
});


describe('Test Case 3: Invalid Password', () => {
  it('Should show error for valid username with invalid password', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('#username').type('student');
    cy.get('#password').type('WrongPassword');
    cy.get('#submit').click();
    cy.get('.show').should('contain.text', 'Your password is invalid!');
    cy.url().should('include', '/practice-test-login');
  });
});
