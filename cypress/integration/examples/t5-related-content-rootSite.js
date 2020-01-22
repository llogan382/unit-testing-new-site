describe('Checks related posts from other subsite', function () {
    it('Checks related posts from other subsite', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/test-modules/related-content-t5005a-root-site/')
    })

    it('Checks for content from another subsite', function () {
        cy.get('.related-content__row').should('exist')
    })
    it('Checks for all 6 images', function () {
        cy.get('.related-content__row > div').eq(5).should('exist')
    })
    it('Checks image size', function () {
        cy.get('.rc-image').eq(1).should('have.css', 'width', '301.65625px').and('have.css', 'height', '214.453125px')
    })
    it('Checks Post Category and link', function () {
        cy.get('.rc-label > a').eq(5).and('have.attr', 'href', 'https://hpu-multistage.bfmdev1.com/news-media/')
    })
    it('Checks that all featured post images came through from BFM script ', function () {
        cy.get('.rc-image > img').eq(2).should('be.visible')
    })



})