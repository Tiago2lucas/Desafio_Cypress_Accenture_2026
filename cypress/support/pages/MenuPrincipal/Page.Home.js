const DOMINIO_SITE_VALIDAR = 'coffee-cart.app'

/* Elementos Coffee */
const COFFE_ESPRESSO = '[data-test="Espresso"]'
const COFFE_ESPRESSO_MACCHIATO = '[data-test="Espresso_Macchiato"]'
const COFFE_CAPPUCCINO = '[data-test="Cappuccino"]'
const COFFE_MOCHA = '[data-test="Mocha"]'
const COFFE_FLAT_WHITE = '[data-test="Flat_White"]'
const COFFE_AMERICANO = '[data-test="Americano"]'
const COFFE_LATTE = '[data-test="Cafe_Latte"]'
const COFFE_ESPRESSO_CON_PANNA = '[data-test="Espresso_Con Panna"]'
const COFFE_BREVE = '[data-test="Cafe_Breve"]'

const CHECKOUT = '[data-test="checkout"]'
const CART_MODAL = '.cart-preview.show'
// AJUSTE SENIOR: Seletor preciso para os itens da lista dentro do modal
const ITENS_NO_MODAL = '.list-item' 
const BOTAO_CARRINHO_MENU = 'li:nth-child(2) > a'
const MODAL_PROMOCAO = '.promo'
const BOTAO_YES_PROMOCAO = '.yes'
const listaCafes = [
            COFFE_ESPRESSO, COFFE_ESPRESSO_MACCHIATO, COFFE_CAPPUCCINO,
            COFFE_MOCHA, COFFE_FLAT_WHITE, COFFE_AMERICANO,
            COFFE_LATTE, COFFE_ESPRESSO_CON_PANNA, COFFE_BREVE
        ]

class PageHome {

    validacaoPagHome() {
        cy.url().should('include', DOMINIO_SITE_VALIDAR)
    }
   
    validacaoCoffeMenu() {
        const cafes = [
            COFFE_ESPRESSO, COFFE_ESPRESSO_MACCHIATO, COFFE_CAPPUCCINO,
            COFFE_MOCHA, COFFE_FLAT_WHITE, COFFE_AMERICANO,
            COFFE_LATTE, COFFE_ESPRESSO_CON_PANNA, COFFE_BREVE
        ]
        cafes.forEach(cafe => {
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

        cy.get(BOTAO_CARRINHO_MENU)
            .should('be.visible')
            .and('contain', `(${qtdEsperada})`);
    }

    validarModalTotalAberto() {

        cy.get(CHECKOUT).trigger('mouseover');
        cy.get(CART_MODAL).should('be.visible');
    }
    verificarConsistenciaCarrinho() {
        cy.get(ITENS_NO_MODAL)
            .its('length')
            .should('be.greaterThan', 0);

        cy.get(CHECKOUT)
            .invoke('text')
            .then((texto) => {
                const total = parseFloat(texto.match(/\d+\.\d+/)[0]);
                expect(total).to.be.greaterThan(0);
            });
    }
    
  
    selecionarQtItemPromo() {
        const quantidadeParaClicar = 3;

        for (let i = 0; i < quantidadeParaClicar; i++) {
            const indiceAleatorio = Math.floor(Math.random() * listaCafes.length);
            cy.get(listaCafes[indiceAleatorio]).click();
      
        }
    }
    verificarModalAbertoPromocao() {
        cy.get(MODAL_PROMOCAO).should('be.visible');
    }

    clicarBotaoYesPromocao() {
        cy.get(BOTAO_YES_PROMOCAO).click();
    }
    verificarModalFechadoPromocao() {
        cy.get(MODAL_PROMOCAO).should('not.exist');
    }
}
export default new PageHome();