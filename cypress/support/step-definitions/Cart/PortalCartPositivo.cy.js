import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import PageCart from '../../pages/Cart/Page.Cart';

And('acessa a página do carrinho de compras', () => {
    PageCart.acessarPaginaCarrinho();
});
Then('o usuário deve visualizar todos os produtos com seus respectivos nomes e preços', () => {
    PageCart.validarCarrinho();
    
});
And('o valor total deve corresponder à soma dos itens adicionados', () => { 
    PageCart.validarCarrinhoComBaseNosValoresGlobais();
})