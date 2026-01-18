import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageHome from "../../pages/MenuPrincipal/Page.Home";

And("o sistema deve exibe a listagem de produtos disponíveis", () => {
    PageHome.validacaoCoffeMenu();
});

