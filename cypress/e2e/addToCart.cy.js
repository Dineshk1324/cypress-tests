const loginPage = require('./pages/loginPage');
const inventoryPage = require('./pages/inventoryPage');
const cartPage = require('./pages/cartPage');

describe('SauceDemo Add to Cart Flow', () => {
    it('should login, add a product to the cart, and verify details', () => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');

        // Capture product name & price
        inventoryPage.getFirstProductName().invoke('text').as('selectedName');
        inventoryPage.getFirstProductPrice().invoke('text').as('selectedPrice');

        // Add to cart
        inventoryPage.addFirstProductToCart();
        inventoryPage.goToCart();

        // Validate
        cy.get('@selectedName').then((name) => {
            cartPage.getCartProductName().should('contain', name);
        });

        cy.get('@selectedPrice').then((price) => {
            cartPage.getCartProductPrice().should('contain', price);
        });
    });
});
