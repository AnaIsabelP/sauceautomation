/// <reference types="cypress" />

describe('Purchasing process',()=>{
    before(()=>{
        cy.visit('/'); //esto llama a lo que está en cypress.json (la url del sitio)
    })
    it('login and purchasing process',()=>{
        //LOGIN
        cy.login('standard_user','secret_sauce')
        cy.contains('Products')
        //Purchaing Process

        /*cy.get ('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get ('.shopping_cart_badge').should('be.visible');
        cy.get ('.shopping_cart_link').click();
        cy.get ('[data-test="checkout"]').click();

        cy.get ('[data-test="firstName"]').type('Isabel');
        cy.get ('[data-test="lastName"]').type('Peña');
        cy.get('[data-test="postalCode"]').type('17012');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click()
        cy.get('.title').contains('Checkout: Complete!')*/

        cy.purchasingProcess('Isabel','Peña','17012')
        cy.get('.title').contains('Checkout: Complete!')

     })


    /*it('shopping',()=>{ así con este caso por acá siempre me sale error, debe ser porq no se puede acceder a comparar sin loguearrse antes
        cy.get ('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get ('.shopping_cart_badge').should('be.visible');
        cy.get ('.shopping_cart_link').click();
        cy.get ('[data-test="checkout"]').click();
    })*/
})
