import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

And("o usuario seleciona os produtos desejados", () => {
    PageHome.selecionarCoffeAleatorios();

});

When("ele adicionar produtos ao carrinho de compras", () => {
    PageHome.validarCarrinhoComEnv();
    
});

Then("o usuario visualiza o valor total dos produtos adicionados no modal checkout", () => {
    PageHome.validarModalTotalAberto();
    PageHome.verificarConsistenciaCarrinho();
});

