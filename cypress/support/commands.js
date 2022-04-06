// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import selector from './selector'

//Este es el comando de login de sauce.js
Cypress.Commands.add('login',(username,password)=>{

    cy.get(selector.username).should('be.visible')
    cy.get(selector.username).type(username)
    cy.get(selector.password).type(password)

    cy.get(selector.loginButton).click()
})

import cartselector from './cartselector'
//este comando es para agregar al carrito

Cypress.Commands.add('purchasingProcess',(firstName,lastName,postalCode)=>{

    cy.get(cartselector.add2cart).click()
    cy.get(cartselector.cartBadge).should('be.visible')
    cy.get(cartselector.go2cart).click()
    cy.get(cartselector.checkoutButton).click()
    cy.get(cartselector.firstName).type(firstName)
    cy.get(cartselector.lastName).type(lastName)
    cy.get(cartselector.postalCode).type(postalCode)
    cy.get(cartselector.continueButton).click()
    cy.get(cartselector.finishButton).click()

})