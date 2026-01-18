import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

Given("o usuario acessar a página Coffe Cart", () => {
    cy.visit("/");
});
When("ele visualiza o menu principal do site", () => {
    PageHome.validacaoCoffeMenu();
});