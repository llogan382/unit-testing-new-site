describe('Check Homepage Macbook 15', function () {
    beforeEach(function () {
        cy.visit('https://hpu-multistage.bfmdev1.com/')
        cy.viewport('macbook-15');
    })
    // it('Checks Left Top Menu', function () {
    //     cy.get('#menu-first-header-menu-left>li')
    //         .eq(3)
    //         .contains('Faculty')

    // });
    // it('checks top menu background', function () {
    //     cy.get('.frame')
    //         .should('have.css', 'background-color')
    //         .and('contain', 'rgb(245, 245, 245)');
    // })
    // it('checks top menu font size', function () {
    //     cy.contains('Faculty & Staff')
    //         .should('have.css', 'font-size')
    //         .and('contain', '14px');
    // })
    // it('Checks orange on button hover in menu', function () {
    //     cy.get('.nav-main__links')
    //         .first()
    //         .trigger('mouseover')
    //     cy.wait(5000);

    // })
    // it('Checks Mega Menu Font Size', function () {
    //     cy.get('#mega-menu-tab-0')
    //         .should('have.css', 'font-size')
    //         .and('contain', '16px');
    // })
    // it('Checks Secondary Menu Size', function () {
    //     cy.get('.header-bottom')
    //         .should('have.css', 'height')
    //         .and('contain', '204px')
    //     cy.get('.header-bottom')
    //         .should('be.visible');
    //     cy.get('.header-bottom')
    //         .should('have.css', 'width')
    //         .and('contain', '1425px');
    // })

    // it('Checks KPI spacing ticket 1863', function () {
    //     cy.get('.number')
    //         .should('have.css', 'letter-spacing')
    //         .and('eq', '-1.2px');
    // })

    // it('Checks top padding on Graduate Study block ticket 1866', function () {
    //     cy.get('.graduate-study')
    //         .should('have.css', 'padding')
    //         .and('eq', '0px 40px');
    // })

    it('Checks top padding on Graduate Study block ticket 1866', function () {
        cy.get('.graduate-study')
            .should('have.css', 'padding')
            .and('eq', '0px 40px');
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