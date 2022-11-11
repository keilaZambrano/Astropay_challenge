///<reference types="cypress" />
import { buyPage } from "../support/pages/BuyPage"
import { loginPage } from "../support/pages/LoginPage"
import { menuPage } from "../support/pages/MenuPage"



describe('Log in and make a check purchase', () => {

    beforeEach('Open the application and log in', () => {
        cy.openHomePage()
    })

    it('User login', () => {
        loginPage.clickSigin()
        loginPage.submitBasicFormWithEmailAndPassword('keila.zambrano.j@gmail.com', 'Valent21')
        loginPage.getUserName('keila.zambrano.j@gmail.com')
        
    })

    it('Add blouse to the cart and print de price', () => {
        menuPage.selectBlouseCategory()
        buyPage.selectFirstItem()
        buyPage.printThePrice()

    })

    it('do a search with no results', () => {
        menuPage.makeSearch('clothing')
        menuPage.validateResult('No encontramos resultados para tu búsqueda')

    })

})