describe('Checks T5 #T5004A tier1', function () {
    it('Checks T5 #T5004A tier1', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/test-modules/archive-tier1-t5004a/')
    })
    // it('Checks Filter Text', function () {
    //     cy.get('.filter-panel__item').contains('Newest')
    // })
    it('Checks search bar exists', function () {
        cy.get('.filter-panel__item').should('exist')
    })
    it('Checks first blog image', function () {
        cy.get('.ar-image > a').should('have.attr', 'href', 'https://hpu-multistage.bfmdev1.com/2019/12/calendar-december-31-2019/')
    })
    it('Checks width of archive tiles', function () {
        cy.get('.ar-post').should('have.css', 'width', '945px').and('have.css', 'height', '314.328125px')
    })
    it('Checks Pagination', function () {
        cy.get('.ajax_pagination').should('contain', '1')
    })
    it('Checks Pagination Length', function () {
        cy.get('.ajax_pagination > ul > li').eq(3)
    })


})