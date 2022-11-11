export class BuyPage {
    elements = {
        firstItem: () => cy.get(':nth-child(1) > :nth-child(1) > #product > .product-wrapper-desktop > .highlight'),
        selectTalle: () => cy.get('.skuespec_Talle_opcao_2'),
        addCart: () => cy.get('.buy-in-page-button'),
        price: () => cy.get('.finalPrice > .skuBestPrice')
    };

    selectFirstItem() {

        this.elements.firstItem().click({ force: true })
        this.elements.selectTalle().click({ force: true })
        this.elements.addCart().click({ force: true })
      
    }


    printThePrice() {

        this.elements.price().invoke('text').then(value => {
            cy.log(value)
        })

    }

}

export const buyPage = new BuyPage()
