/// <reference types="cypress" />


// go to Google Page
// Search for "IStanbul Cat"
//click on the second result 
// go back to search result 
// go to the secon page of the result 
// click the second result on the second page

//hizal@grata.com

describe('Google Test Suit', () => {
    
    it('Test 1', () => {

        cy.visit('https://www.google.com/')
        cy.get('[name="q"]').type('Istanbul Cat{enter}')


        cy.get('[aria-label="Page 2"]').click()
        cy.contains('https://www.abcactionnews.com/news/news-photo-gallery/photos-istanbul-turkey-cats')
       

        cy.log('It did clicked the second link')
        cy.go('back')

    });

});
