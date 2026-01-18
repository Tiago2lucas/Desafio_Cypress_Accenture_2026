
import { CHECKOUT } from '../../pages/MenuPrincipal/Page.Home.js'
const PAGE_CART = 'a[href="/cart"]'
const CARRINHO_COMPRAS = 'div.list'
const BUTTON_DELETE = '.delete'
const DOMINIO_SITE_VALIDAR = 'coffee-cart.app/cart'
const ITEM_PROMOCIONAL = ':nth-child(2) > :nth-child(2) > .unit-desc'
const MODAL_PAGAMENTO = ' .modal-content.size'
const INPUT_NAME = '#name'
const INPUT_EMAIL = '#email'
const BUTTON_FINALIZAR_COMPRA = '#submit-payment'
const MESSAGE_COMPRA_SUCESSO = '.snackbar.success'


class PageCart {

    acessarPaginaCarrinho() {
        cy.get(PAGE_CART).click();
        cy.url().should('include', DOMINIO_SITE_VALIDAR);
        cy.get(CARRINHO_COMPRAS).should('be.visible');
    }

    validarCarrinho() {
        cy.get(CARRINHO_COMPRAS).should('be.visible').and('exist');
    }
validarCarrinhoComBaseNosValoresGlobais() {
    let somaCalculada = 0;
    let quantidadeTotalItens = 0;

    // 1. Percorre os itens para somar valores e quantidades
    cy.get('li.list-item:visible').each(($el) => {
        const textoLinha = $el.text();
        
        // Extrai o preço total da linha (ex: $30.00)
        const matchPreco = textoLinha.match(/\$(\d+\.\d+)/);
        if (matchPreco) {
            somaCalculada += parseFloat(matchPreco[1]);
        }

        // Extrai a quantidade da linha (ex: "x 2")
        const matchQtd = textoLinha.match(/x\s*(\d+)/);
        if (matchQtd) {
            quantidadeTotalItens += parseInt(matchQtd[1]);
        } else {
            // Se não houver o 'x', assume-se que a quantidade é 1
            quantidadeTotalItens += 1;
        }
    }).then(() => {
        // 2. Valida se a soma das quantidades é igual a 4 (3 iniciais fixos + 1 brinde)
        cy.log(`Quantidade total de itens somada: ${quantidadeTotalItens}`);
        expect(quantidadeTotalItens, 'A quantidade total de itens deve ser 4').to.equal(4);

        // 3. Captura o valor final do Checkout
        cy.get('[data-test="checkout"]').invoke('text').then((textoBotao) => {
            // Regex ajustada para capturar o valor numérico corretamente
            const matchTotal = textoBotao.match(/\d+\.\d+/);
            const valorTotalExibido = matchTotal ? parseFloat(matchTotal[0]) : 0;

            cy.log(`Soma Calculada: $${somaCalculada.toFixed(2)} | Total no Botão: $${valorTotalExibido.toFixed(2)}`);

            // 4. Comparação final com tolerância para centavos (Resolve imprecisões de float)
            expect(somaCalculada).to.be.closeTo(valorTotalExibido, 0.01);
        });
    });
    }
    
    itemPromocionalAdicionado() {
     cy.get(ITEM_PROMOCIONAL).should('be.visible');
    }

    removerItemCarrinho() {
        cy.get(BUTTON_DELETE).eq(2).click();
        cy.get(CARRINHO_COMPRAS).should('be.visible');
    }

    validarCheckoutCarrinho() {
      cy.get(CHECKOUT).should('be.visible').and('exist');
    }
    selecionarCheckoutCarrinho() {
        cy.get(CHECKOUT).click();
        cy.get(MODAL_PAGAMENTO).should('be.visible');
    }

    finalizarCompraComSucesso() {
        cy.get(INPUT_NAME).type('Usuario Teste');
        cy.get(INPUT_EMAIL).type('usuario@teste.com');
        cy.get(BUTTON_FINALIZAR_COMPRA).click();
        cy.get(MESSAGE_COMPRA_SUCESSO) .invoke('text')
  .should('not.be.empty')
    }
}
export default new PageCart();