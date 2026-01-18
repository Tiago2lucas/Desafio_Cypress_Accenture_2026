import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

Given("que o usuário acessa a página do Coffee Cart", () => {
    cy.visit("/");
});
When("ele visualiza o menu principal do site", () => {
    PageHome.validacaoCoffeMenu();
});