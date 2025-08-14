describe('Sauce Demo Full Flow', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.btn_action').click();
  });

  it('adds a product, checks out, and verifies totals', () => {
    // 1. Add “Bike Light” to cart
    cy.get('.inventory_list .inventory_item').each(($el) => {
      if ($el.text().includes('Bike Light')) {
        cy.wrap($el).find('button.btn_inventory').click();
      }
    });

    // 2. Go to the cart, start checkout
    cy.get('#shopping_cart_container a').click();
    cy.get('.btn_action').click();

    // 3. Enter user information
    cy.get('[data-test="firstName"]').type('Test');
    cy.get('[data-test="lastName"]').type('User');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('.btn_primary').click();

    // 4. Calculate sum of item prices
    let sum = 0;
    cy.get('.cart_item .inventory_item_price').each(($price) => {
      const price = parseFloat($price.text().replace('$', ''));
      sum += price;
    }).then(() => {
      // Log for visibility during test
      cy.log('Calculated sum:', sum);
    });

    // 5. Compare with displayed subtotal
    cy.get('.summary_subtotal_label').then(($subtotal) => {
      const displayed = parseFloat($subtotal.text().replace('Item total: $', ''));
      expect(displayed, 'Displayed subtotal should match calculated sum').to.eq(sum);
    });

    // 6. Finish checkout
    cy.get('[data-test="finish"]').click();
    cy.contains('Thank you for your order!').should('be.visible');
  });

});
