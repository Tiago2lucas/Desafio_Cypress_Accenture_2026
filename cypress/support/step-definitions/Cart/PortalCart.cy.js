import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import PageCart from '../../pages/Cart/Page.Cart';

When('o usuario acessar o carrinho de compras', () => {
    PageCart.acessarPaginaCarrinho();
});
And('o usuario visualiza os produtos adicionados ao carrinho com seus respectivos nomes e preços', () => {
    PageCart.validarCarrinho();
    
});
And('o usuario valida o valor total dos produtos adicionados ao carrinho', () => { 
    PageCart.validarCarrinhoComBaseNosValoresGlobais();
})