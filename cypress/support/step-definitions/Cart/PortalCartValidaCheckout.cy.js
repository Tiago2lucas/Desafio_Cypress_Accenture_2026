import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

Given('que o usuário está na página do carrinho com produtos adicionados', () => {
    PageHome.selecionarQtItemPromo();
    PageHome.clicarBotaoYesPromocao();
    PageCart.acessarPaginaCarrinho();
    PageCart.itemPromocionalAdicionado();
});

When('o usuário realiza o checkout informando nome e e-mail válidos', () => { 
    PageCart.validarCheckoutCarrinho();
    PageCart.selecionarCheckoutCarrinho();

})

Then('o sistema deve exibir uma mensagem de confirmação de compra com sucesso', () => {
PageCart.finalizarCompraComSucesso();
});