describe('Alerts Example',()=>{
    it('Normal Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsAlert()"]').click();
        cy.on('window:Alert',(D)=>{
            expect(D).to.equal('I am a JS Alert');
        });
        cy.get('p[id="result"]').should('be.visible','You successfully clicked an alert');
        cy.get('p[id="result"]').should('have.text','You successfully clicked an alert');
    });

    it('confirm Alert using ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm',(I)=>{
            expect(I).to.contains('I am a JS Confirm');
        });
        cy.get('p[id="result"]').should('be.visible','You clicked: Ok');
        cy.get('p[id="result"]').should('have.text','You clicked: Ok');
    });

    it('confirm Alert using cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm',()=>false);
        cy.get('p[id="result"]').should('be.visible','You clicked: Cancel');
        cy.get('p[id="result"]').should('have.text','You clicked: Cancel');
    });

    it('Prompt Alert using ok button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome');
        });
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.get('p[id="result"]').should('be.visible','You entered: Welcome');
        cy.get('p[id="result"]').should('have.text','You entered: Welcome');
    });

    it.only('Basic Auth - Auth object method', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
        auth: {
        username: 'admin',
        password: 'admin'
    }
    });

    cy.contains('Congratulations').should('be.visible');
    });
});