export class LoginPage {
    elements = {
        singInOpt: () => cy.get('.visible-lg > img'),
        singInWithMailPassBtn: () => cy.get('#loginWithUserAndPasswordBtn > span'),
        emailAddressInput: () => cy.get('#inputEmail'),
        paswordInput: () => cy.get('#inputPassword'),
        singInBtn: () => cy.get('#vtexIdUI-form-classic-login > .modal-footer > #classicLoginBtn'),
        accountInformation: () => cy.get('.vtex-profile-form__profile-summary > :nth-child(2) > :nth-child(1) > .light')
    };



    clickSigin() {
        this.elements.singInOpt().click()
        this.elements.singInWithMailPassBtn().click()
    }

    submitBasicFormWithEmailAndPassword(email, password) {
        this.elements.emailAddressInput().type(email),
            this.elements.paswordInput().type(password),
            this.elements.singInBtn().click()

    }

    getUserName(userRegister) {
        this.elements.accountInformation().then(value => {
            cy.wrap(value).contains(userRegister)
        })
    }
}


export const loginPage = new LoginPage()
