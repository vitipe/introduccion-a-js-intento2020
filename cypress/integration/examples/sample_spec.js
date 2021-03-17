describe('Formulario de edades', () => {
    it('Ingresa al sitio alojado en el server', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
})

/*
Visit: https://example.cypress.io
Find the element with content: type
Click on it
Get the URL
Assert it includes: /commands/actions
Get the input with the .action-email class
Type `fake@email.com` into the input
Assert the input reflects the new value
*/

/*

*/