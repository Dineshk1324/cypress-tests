describe('Swag Labs Demo Login Test',()=>{  
    it('cart login check',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');

    cy.get('.inventory_list .inventory_item').each(($el) => {
        if($el.text().includes('Sauce Labs ')){
            cy.wrap($el).find('button.btn_inventory').click();
        }
});
    cy.get('[data-test="shopping-cart-badge"]').click();
    cy.get('[data-test="checkout"]').scrollIntoView().click();
    
    cy.get('[data-test="firstName"]').type('Test');
    cy.get('[data-test="lastName"]').type('User');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    let total = 0;
    cy.get('div.inventory_item_price').each(($price) => {
        const ttotalText = parseFloat($price.text().replace('$', ''));
        total += ttotalText;
    }).then(() => {
        total = total*1.08;
        total = parseFloat(total.toFixed(2));
        cy.log('Total with tax:', total);
        cy.get('div.summary_total_label').contains(total);
    });  

    cy.get('[data-test="finish"]').scrollIntoView().click();
    cy.get('h2.complete-header').should('have.text', 'Thank you for your order!');
    cy.get('div.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    cy.get('#back-to-products').should('be.visible');


    });
});