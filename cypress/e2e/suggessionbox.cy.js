describe('Suggession Class Example',()=>{
    it('Type to Select Countries',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[id="autocomplete"]').type('Aus').should('have.value', 'Aus');
        cy.get('li[class="ui-menu-item"]').should('be.visible').each($country => {
            if($country.text() === 'Australia') {
                cy.wrap($country).click({ force: true });
            };
        });
        cy.get('input[id="autocomplete"]').should('have.value', 'Australia');
        cy.get('input[id="autocomplete"]').clear();
        cy.get('input[id="autocomplete"]').type('Ind').should('have.value', 'Ind');
        cy.get('li[class="ui-menu-item"]').should('be.visible').each($country1 => {
            if($country1.text() === 'India') {
                cy.wrap($country1).click({ force: true });
            };
        });
    });
});