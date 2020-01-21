describe('Checks T5 #T5004A tier1', function () {
    it('Checks T5 #T5004A tier1', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/test-modules/archive-tier2-t5004b/')
    })
    // it('Checks Filter Text', function () {
    //     cy.get('.filter-panel__item').contains('Newest')
    // })
    it('Checks search bar exists', function () {
        cy.get('.filter-panel').should('exist')
    })
    it('Checks first blog image', function () {
        cy.get('.ar-image > a').should('not.have.attr', 'href', 'https://hpu-multistage.bfmdev1.com/2019/12/calendar-december-31-2019/')
    })
    it('Checks width of archive tiles', function () {
        cy.get('.arw-post').should('have.css', 'width', '770px').and('have.css', 'height', '87px')
    })
    it('Checks Pagination', function () {
        cy.get('.ajax_pagination').should('contain', '1')
    })
    it('Checks Pagination Length', function () {
        cy.get('.ajax_pagination > ul > li').eq(3)
    })


})