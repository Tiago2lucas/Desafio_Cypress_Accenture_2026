import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

When('o usuario realiza o checkout com name e email validos no modal apresentado', () => { 
    PageCart.validarCheckoutCarrinho();
    PageCart.selecionarCheckoutCarrinho();

})

Then('o usuario finaliza a compra visualizando o modal com mensagem de confirmacao da compra sucesso', () => {
PageCart.finalizarCompraComSucesso();
});