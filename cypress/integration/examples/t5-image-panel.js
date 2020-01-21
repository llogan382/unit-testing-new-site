describe('Checks T5 #T5004A tier1', function () {
    it('Checks T5 #T5004A tier1', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/test-modules/image-panels-t5003a/')
    })
    // it('Checks Filter Text', function () {
    //     cy.get('.filter-panel__item').contains('Newest')
    // })
    it('Checks height and width of image panel', function () {
        cy.get('.image-panel__row').should('have.css', 'height', '769.671875px').and('have.css', 'width', '945px')
    })
    it('Checks Title Content', function () {
        cy.get('.module-title').should('contain', '1').and('have.css', 'font', 'normal normal 700 normal 25px / normal Bitter, serif').and('have.css', 'color', 'rgb(51, 0, 114)')
    })
    it('Checks CTA of top image', function () {
        cy.get('.image-panel__cta > a').should('have.attr', 'href', '/2020/01/21/hello-world/')
    })
    it('Checks CTA of top image', function () {
        cy.get('.image-panel__cta').should('contain', 'Hello')
    })



})