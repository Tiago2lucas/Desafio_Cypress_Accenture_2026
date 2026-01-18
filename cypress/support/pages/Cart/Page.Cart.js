// Page.Cart.js
import { CHECKOUT } from '../../pages/MenuPrincipal/Page.Home.js';
import { CartElements } from './Config.Cart.js'; // Importando as variáveis que separamos

class PageCart {

    acessarPaginaCarrinho() {
        cy.get(CartElements.PAGE_CART).click();
        cy.url().should('include', CartElements.DOMINIO_SITE_VALIDAR);
        cy.get(CartElements.CARRINHO_COMPRAS).should('be.visible');
    }

    validarCarrinho() {
        cy.get(CartElements.CARRINHO_COMPRAS).should('be.visible').and('exist');
    }

    validarCarrinhoComBaseNosValoresGlobais() {
        let somaCalculada = 0;
        let quantidadeTotalItens = 0;

        cy.get('li.list-item:visible').each(($el) => {
            const textoLinha = $el.text();
            const matchPreco = textoLinha.match(/\$(\d+\.\d+)/);
            if (matchPreco) {
                somaCalculada += parseFloat(matchPreco[1]);
            }
            const matchQtd = textoLinha.match(/x\s*(\d+)/);
            if (matchQtd) {
                quantidadeTotalItens += parseInt(matchQtd[1]);
            } else {
                quantidadeTotalItens += 1;
            }
        }).then(() => {
            cy.log(`Quantidade total de itens somada: ${quantidadeTotalItens}`);
            expect(quantidadeTotalItens, 'A quantidade total de itens deve ser 4').to.equal(4);
            cy.get('[data-test="checkout"]').invoke('text').then((textoBotao) => {
                const matchTotal = textoBotao.match(/\d+\.\d+/);
                const valorTotalExibido = matchTotal ? parseFloat(matchTotal[0]) : 0;
                cy.log(`Soma Calculada: $${somaCalculada.toFixed(2)} | Total no Botão: $${valorTotalExibido.toFixed(2)}`);
                expect(somaCalculada).to.be.closeTo(valorTotalExibido, 0.01);
            });
        });
    }

    itemPromocionalAdicionado() {
        cy.get(CartElements.ITEM_PROMOCIONAL).should('be.visible');
    }

    removerItemCarrinho() {
        cy.get(CartElements.BUTTON_DELETE).eq(2).click();
        cy.get(CartElements.CARRINHO_COMPRAS).should('be.visible');
    }

    validarCheckoutCarrinho() {
        cy.get(CHECKOUT).should('be.visible').and('exist');
    }

    selecionarCheckoutCarrinho() {
        cy.get(CHECKOUT).click();
        cy.get(CartElements.MODAL_PAGAMENTO).should('be.visible');
    }

    finalizarCompraComSucesso() {
        cy.get(CartElements.INPUT_NAME).type('Usuario Teste');
        cy.get(CartElements.INPUT_EMAIL).type('usuario@teste.com');
        cy.get(CartElements.BUTTON_FINALIZAR_COMPRA).click();
        cy.get(CartElements.MESSAGE_COMPRA_SUCESSO).invoke('text')
            .should('not.be.empty');
    }
}

export default new PageCart();