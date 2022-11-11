///<reference types="cypress" />

describe('API test', () => {

    it('simulate insertion', () => {

        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: {
                "id": 101,
                "title": "prueba keila",
                "body": "body de la prueba",
                "userId": 333
            }
        }).then(response => {
            expect(response.status).to.equal(201)
            expect(response.body, 'response body').to.deep.equal({
                id: 101,
                title: 'prueba keila',
                body: 'body de la prueba',
                userId: 333,
            })
        })
    })



    it('get value', () => {

        cy.request({
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            method: 'GET'
        }).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.title).to.deep.equal(
                'delectus aut autem'
            )
        })
    })
})