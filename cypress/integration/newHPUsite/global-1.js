describe('Check Global 1 Macbook 15', function () {

    // it('clicks something', function () {
    //     cy.get('div.about-contact:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    //         .should('be.visible')
    // })

    it('Checks if video title appears while video is playing, ticket 1870', function () {
        cy.visit('https://hpu-multistage.bfmdev1.com/luke-test/')
        cy.viewport('macbook-15')
        cy.get('.plyr__control--overlaid')
            .click()
            .get('.video-title__text')
            .should('be.hidden')

        // .get('.video-title__text')
        // .should('be.visible')
    })

    // it('Checks if viqerf', function () {
    //     cy.visit('https://hpu-multistage.bfmdev1.com/global1-1/')
    //     //     cy.wait(5000)
    //     //     cy.viewport('macbook-15')
    //     cy.get('.full-width-video > .video-holder > .plyr > .plyr__control--overlaid')
    //         .click()
    //     //         .get('.video-title__text')
    //     //         .should('be.hidden')
    // })

});