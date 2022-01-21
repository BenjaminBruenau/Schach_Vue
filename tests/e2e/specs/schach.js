// https://docs.cypress.io/api/introduction/api.html

import {testPassword, testUsername} from "../support";

describe('Verify Game functionality', () => {
    it('Should Login first', () => {
        cy.visit('/login')
        cy.login(testUsername, testPassword)
    })
    it('Should be redirected to the Game', () => {
        cy.contains('strong', 'Successfully Logged into Your Account')
        cy.url({timeout: 3000}).should('be.equal', Cypress.config().baseUrl + 'schach')
    })
    it('Should Wait for Pieces to appear', () => {
        cy.get('.svg-piece',{ timeout: 10000 }).should('be.visible')
    })
    it('Should ensure every Piece is in their initial position', () => {
        cy.contains('button', 'New Game').click({ force: true })
    })
    it('Should show the move suggestion for Pawns', () => {
        cy.get('#74', { timeout: 5000 }).click({ force: true })
        cy.get('#64', { timeout: 5000 }).should('have.class', 'suggestion-green')
        cy.get('#54', { timeout: 5000 }).should('have.class', 'suggestion-green')
    })
    it('Should make an opening move', () => {
        cy.get('#54').click({ force: true })
        cy.get('#54').children('.svg-piece')
    })
    it('Should make an invalid move which is detected', () => {
        cy.get('#75').click({ force: true })
        cy.get('#71').click({ force: true })

        cy.contains('.me-auto', 'Invalid Move')
    })
    it('Should make a couple of moves and hit enemy pieces', () => {
        // move black Pawn two cells down
        cy.get('#25').click({ force: true })
        cy.get('#45').click({ force: true })

        // hit black Pawn with white one
        cy.get('#54').click({ force: true })
        cy.get('#45').click({ force: true })

        // Graveyard should be populated after piece was hit
        cy.contains('.graveyard_count', '1')
    })
    it('Should perform Rochade on White King', () => {
        // Reset Pieces
        cy.contains('button', 'New Game').click({ force: true })

        // make way for Bishop
        cy.get('#75').click({ force: true })
        cy.get('#55').click({ force: true })

        // move black Pawn two cells down
        cy.get('#25').click({ force: true })
        cy.get('#45').click({ force: true })

        // move bishop away
        cy.get('#86').click({ force: true })
        cy.get('#75').click({ force: true })

        // move black Pawn two cells down
        cy.get('#23').click({ force: true })
        cy.get('#33').click({ force: true })

        // move knight away
        cy.get('#87').click({ force: true })
        cy.get('#68').click({ force: true })

        // move black Knight
        cy.get('#12').click({ force: true })
        cy.get('#31').click({ force: true })

        // ROCHADE
        cy.get('#85').click({ force: true })
        cy.get('#87').click({ force: true })

        // King in Corner
        cy.get('#87').children('.svg-piece')
        // Rook blocking entrance
        cy.get('#87').children('.svg-piece')
    })

})
