describe('Formulario de edades', () => {
    it('Ingresa al sitio alojado en el server', () => {
        cy.visit('http://192.168.100.10:8080')
    })

    it('Encuentra el input "Cantidad de familiares"', () => {
        cy.get('input')
    })

    it('Agrega un valor al input de cantidad de familiares', () => {
        cy.get('input').type(3)
    })

    it('Chequea que el input tenga un valor', () => {
        cy.get('input').should('have.value', '3')
    })

    it('Agarra el boton "Agregar" y lo clickea', () => {
        cy.get('button').click()
    })

    it('Chequea que se hayan creado los inputs "edades"', () => {
        cy.get('.edades')
    })

    it('Chequea que se hayan creado tantos inputs como el valor del input de cantidad de familiares', () => {
        cy.get('.edades').should('have.length', '3')
    })

    it('Ingresa valores a los inputs de cada familiar', () => {
        cy.get('.edades').eq(0).type('25');
        cy.get('.edades').eq(1).type('30');
        cy.get('.edades').eq(2).type('35');
    })

    it('Encuentra el boton "calcular y lo clickea', () => {
        cy.get('button').eq(1).click() //aca me gustaria enganchar el elemento mediante un id tipo "boton-calcular" no anda
    })

    it('Chequea que aparezcan los resultados', () => {
        cy.get('p[id="resultado-mayor-edad"]')
        cy.get('p[id="resultado-menor-edad"]')
        cy.get('p[id="resultado-promedio-edad"]')
    })

    it('Chequea que esten bien los resultados', () => {
        cy.get('p[id="resultado-mayor-edad"]').should('have.text', 'La mayor edad es 35 años.')
        cy.get('p[id="resultado-menor-edad"]').should('have.text', 'La menor edad es 25 años.')
        cy.get('p[id="resultado-promedio-edad"]').should('have.text', 'La edad promedio es 30 años.')
    })

    it('Encuentra el boton "resetear" y lo clickea', () => {
        cy.get('button').eq(2).click() //aca me gustaria enganchar el elemento mediante un id tipo "boton-calcular" no anda
    }) //'[id="test-example"]'

})



