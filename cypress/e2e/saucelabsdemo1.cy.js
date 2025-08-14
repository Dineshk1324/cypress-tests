describe('Sauce lab demo', () => {

    it('Validate adding product to the cart and ensure successful placement of order', () => {

        // Visit current SauceDemo site
        cy.visit('https://www.saucedemo.com/');

        // Login
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        // Loop through products and add specific ones
        cy.get('.inventory_item').each(($product) => {
            const productName = $product.find('.inventory_item_name').text();

            if (productName.includes('Backpack') || productName.includes('Bike Light')) {
                cy.wrap($product)
                    .find('button.btn_inventory')
                    .should('be.visible')
                    .click();
            }
        });

        // Go to cart
        cy.get('.shopping_cart_link').click();

        // Checkout
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('some');
        cy.get('[data-test="lastName"]').type('new');
        cy.get('[data-test="postalCode"]').type('1234');
        cy.get('[data-test="continue"]').click();

        // Calculate sum of all cart item prices
        let sum = 0;
        cy.get('.inventory_item_price').each(($priceEl) => {
            const priceText = $priceEl.text().replace('$', '').trim();
            sum += Number(priceText);
        }).then(() => {
            cy.log(`Calculated Sum: ${sum}`);
        });

        // Verify subtotal matches calculated sum
        cy.get('.summary_subtotal_label').then(($subtotal) => {
            const subtotalText = $subtotal.text().split('$')[1].trim();
            const subtotalValue = Number(subtotalText);
            expect(subtotalValue).to.equal(sum);
        });
        cy.get('[data-test="finish"]').click();
        cy.contains('Thank you for your order!').should('be.visible');
        
    });

});
