import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";

And('o item promocional Mocha deve estar listado no carrinho', () => { 
    PageCart.itemPromocionalAdicionado();
});