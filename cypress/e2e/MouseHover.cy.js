describe('Mouse Hover Example',()=>{
    it('Mouse Hover - Top',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('.mouse-hover-content a', 'Top').click();
        cy.url().should('include', 'AutomationPractice');
    });

    it('Mouse Hover - Reload',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('.mouse-hover-content a', 'Reload').click();
        cy.url().should('include', 'AutomationPractice');
    });

    it.only('Scrolling view     ',()=>{ 
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world/');
    });      
});
