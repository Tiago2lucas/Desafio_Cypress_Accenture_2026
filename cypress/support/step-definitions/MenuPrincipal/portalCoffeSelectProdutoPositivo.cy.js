import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

Given("que o usuário seleciona os produtos desejados", () => {
    PageHome.selecionarCoffeAleatorios();

});

When("ele adiciona os produtos ao carrinho de compras", () => {
    PageHome.validarCarrinhoComEnv();
    
});

Then("o usuário visualiza o valor total dos produtos no botão de checkout", () => {
    PageHome.validarModalTotalAberto();
    PageHome.verificarConsistenciaCarrinho();
});

