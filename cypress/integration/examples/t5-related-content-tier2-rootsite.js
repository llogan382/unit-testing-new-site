describe('Checks related posts from root site', function () {
    it('Checks related posts from root site', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/test-modules/related-content-t5005b/')
    })

    it('Checks Title', function () {
        cy.get('.module-title').should('contain', 'Related').and('have.css', 'color', 'rgb(51, 0, 114)')
    })
    it('Checks Posts Appear', function () {
        cy.get('.related-content__row > div').eq(3).should('exist')
    })
    it('Checks Post Category and link', function () {
        cy.get('.rc-label > a').eq(2).and('have.attr', 'href', 'https://hpu-multistage.bfmdev1.com/news-media/')
    })
    it('Checks post font styles', function () {
        cy.get('.js-title-ellipsis').should('have.css', 'color', 'rgb(32, 31, 34)')
    })




})