/// <reference types="cypress" />


// Go to Grata Login Page
// fill username and password
// click submit button


describe('Grata Home Page Test Suit', () => {
    
    it('Login Test', () => {
        cy.visit('https://login.gratadata.com/')

        //cy.get('.nav-buttons > .nav-link-block > :nth-child(1)').click()

        cy.get('[name="email"]').type('manu@example.com')
        cy.get('[name="password"]').type('1212321@example.com', {log:false})

        cy.get('.gsd-icon-button').click()
    });

    


});











