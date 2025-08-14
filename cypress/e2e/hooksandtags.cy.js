describe('Hooks And Tags',()=>{

    before(() => {
        cy.log('This runs once before all tests in this block');
    });

    beforeEach(() => {
        cy.log('This runs once before each tests in this block');
    });
    
    after(() => {
        cy.log('This runs once After all tests in this block');
    });

    afterEach(() => {
        cy.log('This runs once After each tests in this block');
    });

    it('CHATGPT',()=>{
        cy.log('Using ChatGPT for test automation');

    });

    it('Perplexity',()=>{
        cy.log('Using Perplexity for test automation');
    });

    it('DeepSeek AI',()=>{
        cy.log('Using DeepSeek AI for test automation');
    });
});