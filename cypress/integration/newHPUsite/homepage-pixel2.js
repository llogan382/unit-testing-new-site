describe('Check Homepage Macbook 15', function () {
    beforeEach(function () {
        cy.visit('https://hpu-multistage.bfmdev1.com/')
        cy.viewport(411, 731)

    })


    it('Checks ticket 1839, 1848, 1850 ', function () {



        cy.get('.post')
            .should('be.visible')
            .should('have.css', 'height')
            .and('eq', '100px')

        cy.get('.address-toggler > span')
            .contains('Address')

        cy.get('.top-section__link > a')
            .should('have.css', 'padding')
            .and('eq', '8px');

    })

    it('checks font color in search bar ticket 1852', function () {
        cy.viewport(411, 731)

        cy.get('.nav-mobile > .search-form > .search-btn > svg')
            .click()

        cy.get('.nav-mobile > .search-form > .search-form__form > #s')
            .type('hello')

    })

    it('checks padding for graduate study block ticket 1866', function () {
        cy.viewport(411, 731)
        cy.get('.nav-mobile > .search-form > .search-btn > svg')
            .click()

        cy.get('.graduate-study')
            .should('have.css', 'padding')
            .and('eq', '0px 20px');

    })

    it('checks Twitter image feed ticket 1869', function () {
        cy.get('#ff-uid-9 > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)')
            .should('be.visible')
    })

    it('checks Facebook image feed ticket 1869', function () {
        cy.get('#ff-uid-8 > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > img')
            .should('be.visible')
    })
});



    // .get('.search-form__input')
    // .type('hello')

    // cy.get(':nth-child(2) > .about-contact__container > .left-section > .kpi__background > .image-holder > img')
    //     .should('have.css', 'width')
    //     .and('eq', '381px')

    // cy.get(':nth-child(2) > .about-contact__container > .right-section')

    //     .should('have.css', 'width')
    //     .and('eq', '768px')
    //     .should('have.css', 'height')
    //     .and('eq', '377px')






