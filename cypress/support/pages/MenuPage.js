export class MenuPage {
    elements = {
        category: () => cy.get('.nav > :nth-child(2) > :nth-child(1)'),
        subCategoryBlouses: () => cy.contains('Camisas y Blusas'),
        searchField: () => cy.get('[class="fulltext-search-box ui-autocomplete-input"][type="text"][role="textbox"]'),
        searchBtn: () => cy.get('input[type="button"].btn-buscar'),
        textResult : () => cy.get('#busca-vazia-content')


    };

    selectBlouseCategory() {

        this.elements.category().realHover('mouse')
        this.elements.subCategoryBlouses().click({ force: true })

    }

    makeSearch(item) {

        this.elements.searchField().eq(1).type(item)
        this.elements.searchBtn().eq(1).click({ force: true })
    }


    validateResult(resultValue) {
        this.elements.textResult().then(value => {
            cy.wrap(value).contains(resultValue)
        })
    }




    
}

export const menuPage = new MenuPage()
