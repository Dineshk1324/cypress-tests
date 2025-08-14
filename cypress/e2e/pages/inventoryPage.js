class InventoryPage {
    addFirstProductToCart() {
        cy.get('.inventory_item').first().within(() => {
            cy.get('button').click();
        });
    }

    getFirstProductName() {
        return cy.get('.inventory_item_name').first();
    }

    getFirstProductPrice() {
        return cy.get('.inventory_item_price').first();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}

module.exports = new InventoryPage();
