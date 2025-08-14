class CartPage {
    getCartProductName() {
        return cy.get('.inventory_item_name');
    }

    getCartProductPrice() {
        return cy.get('.inventory_item_price');
    }
}

module.exports = new CartPage();
