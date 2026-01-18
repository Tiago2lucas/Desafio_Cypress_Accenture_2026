import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

Then("o sistema deve exibir a listagem de produtos disponíveis", () => {
    PageHome.validacaoCoffeMenu();
});

