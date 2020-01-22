describe('Checks Greek Life Content', function () {
    it('Checks related posts from root site', function () {
        cy.viewport('macbook-15')
        cy.visit('https://hpu-multistage.bfmdev1.com/test-modules/greek-life-t5012a/')
    })

    it('checks All Greek Accordions', function () {
        cy.get('.js-go-type').eq(1).should('exist')
    })
    it('checks all content is visible', function () {

        cy.get('#body-accordion-go-0 > .go-type--body-inner > .go-type--body-l > :nth-child(7) > .gtb-value').should('exist').and('be.visible')
    })
    it('checks Accordions Work', function () {
        cy.get('#head-accordion-go-0 > button').click()
        cy.get('#head-accordion-go-0 > button').should('have.css', 'height', '50px').and('have.css', 'width', '945px')
        cy.get('#body-accordion-go-0 > .go-type--body-inner > .go-type--body-l > :nth-child(7) > .gtb-value').should('exist').and('not.be.visible')
    })
    it('Checks that sororities filter properly', function () {
        cy.get('.go-head--sort-list > :nth-child(2) > a').click()
        cy.get('#accordion-go-1').should('not.be.visible')
        cy.get('#accordion-go-0').should('be.visible')

    })
    it('Checks that fraternities filter properly', function () {
        cy.get('.go-head--sort-list > :nth-child(3) > a').click()
        cy.get('#accordion-go-1').should('be.visible')
        cy.get('#accordion-go-0').should('not.be.visible')
    })
    it('Checks that fraternitiy Content is correct', function () {
        cy.get('#head-accordion-go-1 > button').click()
        cy.get('.gtb-value').contains('National')
    })
    it('Checks that fraternitiy Content Font is correct', function () {
        cy.get('.gtb-value').should('have.css', 'font-size', '24px')
            .and('have.css', 'line-height', '28.8px')
            .and('have.css', 'font-family', 'Poppins, sans-serif')

    })
    it('Checks Fraternity Div Size', function () {
        cy.get('#accordion-go-1').should('have.css', 'height', '870px')
    })
    it('Checks Button Styling', function () {
        cy.get('.go-head--sort-list > :nth-child(1) > a')
            .should('have.css', 'border-radius', '25px 0px 0px 25px')
            .and('have.css', 'background-color', 'rgb(255, 255, 255)')
            .and('have.css', 'border-bottom-color', 'rgb(51, 0, 114)')

    })






})