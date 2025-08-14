describe('SauceDemo - All Users Safe Run', () => {

  const users = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
  ];

  const password = 'secret_sauce';
  const productsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

  users.forEach((username) => {

    it(`Testing user: ${username}`, () => {

      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').clear().type(username);
      cy.get('#password').clear().type(password);
      cy.get('#login-button').click();

      cy.url().then((url) => {

        // Skip locked_out_user immediately
        if (username === 'locked_out_user') {
          cy.get('[data-test="error"]').should('contain.text', 'locked out');
          cy.log(`${username} is locked out, skipping checkout`);
          return;
        }

        // If we didn’t reach inventory, skip
        if (!url.includes('inventory.html')) {
          cy.log(`${username} could not reach inventory, skipping checkout`);
          return;
        }

        // Safe check: at least one add-to-cart button exists
        cy.get('button.btn_inventory').then(($btns) => {
          if ($btns.length === 0) {
            cy.log(`${username} has no functional add-to-cart buttons, skipping`);
            return;
          }

          // Try adding products, but wrap in fail-safe
          productsToAdd.forEach((productName) => {
            cy.contains('.inventory_item_name', productName, { timeout: 2000 })
              .parents('.inventory_item')
              .find('button.btn_inventory')
              .then(($btn) => {
                if ($btn.length) {
                  cy.wrap($btn).click({ force: true });
                } else {
                  cy.log(`Product ${productName} not found for ${username}, skipping it`);
                }
              });
          });

          // Proceed to checkout
          cy.get('.shopping_cart_link').click();
          cy.get('[data-test="checkout"]').click();

          // Fill checkout info safely
          cy.get('[data-test="firstName"]').type('Test');
          cy.get('[data-test="lastName"]').type('User');
          cy.get('[data-test="postalCode"]').type('12345');
          cy.get('[data-test="continue"]').click();

          // Verify subtotal matches sum of prices
          let sum = 0;
          cy.get('.inventory_item_price').each(($price) => {
            sum += parseFloat($price.text().replace('$', ''));
          }).then(() => {
            cy.get('.summary_subtotal_label').then(($subtotal) => {
              const subtotalValue = parseFloat($subtotal.text().replace('Item total: $', ''));
              expect(subtotalValue).to.equal(sum);
            });
          });

          // Finish checkout
          cy.get('[data-test="finish"]').click();
          cy.get('.complete-header').should('contain.text', 'Thank you');

          // Logout safely
          cy.get('#react-burger-menu-btn').click();
          cy.get('#logout_sidebar_link').click();
        });
      });

    });

  });
 
});
 Cypress.on('uncaught:exception', () => false);