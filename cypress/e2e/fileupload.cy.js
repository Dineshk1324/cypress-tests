describe('File Upload',()=>{
    it('Single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Query.pdf');
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text', 'File Uploaded!');
        cy.get('[id="uploaded-files"]').should('have.text', '\n    Query.pdf\n  ');
    });

    it('Single file upload-Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'Query.pdf',fileName:'QueryRenamed.pdf'});
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text', 'File Uploaded!');
        cy.get('[id="uploaded-files"]').should('have.text', '\n    QueryRenamed.pdf\n  ');
    });

    it('Drag-n-drop component',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('div[id="drag-drop-upload"]').attachFile('Query.pdf',{subjectType:'drag-n-drop'});
        cy.wait(3000);
        
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text', 'Query.pdf');
        cy.get('#file-submit').click();
        cy.get('h1').should('have.text', 'Internal Server Error');
    });

    it('Drag-n-drop component',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('input#filesToUpload').attachFile(['Query.pdf','Hematology.pdf']);
        
    });

    it.only('File Upload - ShadowDom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Query.pdf');
        cy.wait(3000);
        cy.get('.smart-item-name',{includeShadowDom:true}).should('have.text', 'Query.pdf');
        
    });
});
