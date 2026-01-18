import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";

Then('o usuario valida o produto promocional adicionado ao carrinho', () => { 
    PageCart.itemPromocionalAdicionado();
});