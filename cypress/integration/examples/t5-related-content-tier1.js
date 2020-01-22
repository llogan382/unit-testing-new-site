describe('Checks related posts from other subsite', function () {
    it('Checks related posts from other subsite', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/test-modules/related-content-t5005a/')
    })

    it('Checks Checks for content from another subsite', function () {
        cy.get('.related-content__row').should('exist')
    })



})