describe('Handling web tables',()=>{
    beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('Check No.of Rows and columns',()=>{
        cy.get('table[class="table-display"]>tbody > tr').should('have.length', 11);
        cy.get('table[class="table-display"]>tbody > tr > td').should('have.length', 30);
    });

    it('Check cell data from specific row & Column',()=>{
        cy.get('table[class="table-display"]>tbody>tr:nth-child(3)>td:nth-child(2)')
        .contains('Learn SQL in Practical + Database Testing from Scratch');
    });

   it.only('Read all the rows & columns data in the first page', () => {
  cy.get('table[class="table-display"]>tbody > tr > td').each(($row, rowIndex) => {
    cy.wrap($row).then($cells => {
      if ($cells.length) {
        cy.wrap($cells).each(($cell, colIndex) => {
          cy.log(`Row ${rowIndex + 1}, Col ${colIndex + 1} → ${$cell.text()}`);
        });
      }
    });
  });
});



    it('Pagination',()=>{
        
    });
});