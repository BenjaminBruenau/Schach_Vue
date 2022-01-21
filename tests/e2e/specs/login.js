// https://docs.cypress.io/api/introduction/api.html


import {testPassword, testUsername} from "../support";

describe('Basic e2e Test for Authentication', () => {
  it('Visits  the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'Play')
  })
  it('Is redirected to the Login Page', () => {
    cy.contains('a', 'Play').click({ force: true })

    cy.url().should('be.equal',  Cypress.config().baseUrl + 'login')
  })
  it('Should perform a Login', () => {
    cy.get('[data-cy=username]').type(testUsername);
    cy.get('[data-cy=password]').type(testPassword);

    cy.contains('button', 'Login').click({ force: true })
  })
  it('Should be redirected to the Game', () => {
    cy.contains('strong', 'Successfully Logged into Your Account')
    cy.url({timeout: 3000}).should('be.equal', Cypress.config().baseUrl + 'schach')
  })

})
