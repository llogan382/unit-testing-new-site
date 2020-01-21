describe('Checks Chemistry on Desktop', function () {
    it('Checks Chemistry on Macbook!', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/chemistry/')
    })
    it('Checks Contact Info width', function () {
        cy.get('.right-section').should('have.css', 'width', '905px')
    })
    it('Checks Major Youtube Video Link', function () {
        cy.get('.block-video').should('have.attr', 'href', 'https://www.youtube.com/watch?v=k1BYazuZCmo&feature=youtu.be')
    })
    it('checks video background image', function () {
        cy.get('.video-trigger').should('have.attr', 'style', 'background-image: url(\'https://hpu-multistage.bfmdev1.com/chemistry/files/2020/01/maxresdefault-640x455.jpg\')')
    })
    it('checks for default, empty imaged', function () {
        cy.get('.no-img').should('not.exist')
    })
    it('checks related academics', function () {
        cy.get('#r-tab-0 > .related-tabs__links > li > a').should('be.empty')
    })
    it('checks FAQs on Major Page', function () {
        cy.get('#head-collapse_0_0 > .accordion-base__toggle').should('contain', 'Why should I major in chemistry at HPU?')
    })

})