// Page.Cart.js
import { CHECKOUT } from '../../pages/MenuPrincipal/Page.Home.js';
import { CartElements } from './Config.Cart.js'; 
import { HomeElements } from '../MenuPrincipal/Config.Home.js';


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

        cy.get(HomeElements.LIST_ITEMS).each(($el) => {
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
            cy.get(CHECKOUT).invoke('text').then((textoBotao) => {
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
        cy.screenshot('2.Antes-de-remover');
        cy.get(CartElements.BUTTON_DELETE).eq(2).click();
        cy.get(CartElements.CARRINHO_COMPRAS).should('be.visible');
        cy.screenshot('3.Item-removido');
    }

    validarCheckoutCarrinho() {
        cy.get(CHECKOUT).should('be.visible').and('exist');
    }

    selecionarCheckoutCarrinho() {
        cy.get(CHECKOUT).click();
        cy.get(CartElements.MODAL_PAGAMENTO).should('be.visible');
    }

    preencheCamposPagamento() {
      cy.screenshot('4.Campo-vazio');
        cy.get(CartElements.INPUT_NAME).type(HomeElements.NAME_ALEATORIO);
        cy.get(CartElements.INPUT_EMAIL).type(HomeElements.EMAIL_ALEATORIO);
        cy.screenshot('5.Campo-preenchido');
        
      
    }
   
    verificaPopUpName() {
        cy.get(CartElements.INPUT_NAME).then(($input) => {
            expect($input[0].validity.valueMissing).to.be.true;
              
        })
          cy.screenshot('2.1.Falha-sem-Nome-Email');
       
    }
    verificarPopUpEmail() {
        cy.get(CartElements.INPUT_EMAIL).then(($input) => {
        const elemento = $input[0];
            expect(elemento.validationMessage).to.contain('@');
        
});
    }

    finalizarCompraSucesso() {
        cy.get(CartElements.CHECKBOX_PAGAMENTO).check()
        cy.get(CartElements.BUTTON_FINALIZAR_COMPRA).click();
        cy.get(CartElements.MESSAGE_COMPRA_SUCESSO).invoke('text')
            .should('not.be.empty');
         cy.screenshot('6.Finzaliando-compra-Sucesso');
       
    }

    preencheCamposPagamentoEmailErrado() {
        cy.get(CartElements.INPUT_NAME).type(HomeElements.NAME_ALEATORIO);
        cy.get(CartElements.INPUT_EMAIL).type(HomeElements.EMAIL_ALEATORIO_ERRADO);
      
    
    }

     finalizarCompraSemSucesso() {
        cy.get(CartElements.BUTTON_FINALIZAR_COMPRA).click();
        cy.get(CartElements.MESSAGE_COMPRA_SUCESSO).should('not.exist')
        cy.screenshot('2.2.Falha-Email-invalido');
    }


}

export default new PageCart();