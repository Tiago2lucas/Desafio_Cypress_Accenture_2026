import { HomeElements, listaCafes } from './Config.Home.js';

export const CHECKOUT = HomeElements.CHECKOUT;

class PageHome {

    validacaoPagHome() {
        cy.url().should('include', HomeElements.DOMINIO_SITE_VALIDAR)
    }
   
    validacaoCoffeMenu() {
        listaCafes.forEach(cafe => {
            cy.get(cafe).should('be.visible')
        })
    }

    selecionarCoffeAleatorios() {
        const quantidadeParaClicar = Math.floor(Math.random() * 4) + 3;

        for (let i = 0; i < quantidadeParaClicar; i++) {
            const indiceAleatorio = Math.floor(Math.random() * listaCafes.length);
            cy.get(listaCafes[indiceAleatorio]).click();
        }

        Cypress.env('quantidadeSorteada', quantidadeParaClicar);
        cy.log(`Foram adicionados ${quantidadeParaClicar} cafés.`);
    }

    validarCarrinhoComEnv() {
        const qtdEsperada = Cypress.env('quantidadeSorteada');

        cy.get(HomeElements.BOTAO_CARRINHO_MENU)
            .should('be.visible')
            .and('contain', `(${qtdEsperada})`);
    }

    validarModalTotalAberto() {
        cy.get(HomeElements.CHECKOUT).trigger('mouseover');
        cy.get(HomeElements.CART_MODAL).should('be.visible');
    }

    verificarConsistenciaCarrinho() {
        cy.get(HomeElements.ITENS_NO_MODAL)
            .its('length')
          .then((quantidade) => {
            expect(quantidade).to.be.greaterThan(0);
            Cypress.env('quantidadeItens', quantidade);
        });

        cy.get(HomeElements.CHECKOUT)
            .invoke('text')
            .then((texto) => {
                const total = parseFloat(texto.match(/\d+\.\d+/)[0]);
                expect(total).to.be.greaterThan(0);
            });
    }  

    selecionarQtItemPromo() {
       const cafesFixos = [
        HomeElements.COFFE_ESPRESSO, 
        HomeElements.COFFE_CAPPUCCINO, 
        HomeElements.COFFE_AMERICANO
    ];

    cafesFixos.forEach(cafe => {
        cy.get(cafe).click();
    });
    }

    verificarModalAbertoPromocao() {
        cy.get(HomeElements.MODAL_PROMOCAO).should('be.visible');
    }

    clicarBotaoYesPromocao() {
        cy.get(HomeElements.BOTAO_YES_PROMOCAO).click();
    }

    verificarModalFechadoPromocao() {
        cy.get(HomeElements.MODAL_PROMOCAO).should('not.exist');
    }
}

export default new PageHome();