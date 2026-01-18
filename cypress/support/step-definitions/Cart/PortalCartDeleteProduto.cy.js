import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";


When('o usuario remove um item do carrinho de compras', () => { 
    PageCart.removerItemCarrinho();
});
And('o usuario valida que um item foi removido com sucesso do carrinho de compras', () => { 
    PageCart.validarCarrinho();

}); 