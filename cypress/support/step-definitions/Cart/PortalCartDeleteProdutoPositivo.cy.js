import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";
import PageHome from "../../pages/MenuPrincipal/Page.Home";


Given('que o usuário adicionou três produtos e o item promocional Mocha', () => { 
    PageHome.selecionarQtItemPromo();
    PageHome.clicarBotaoYesPromocao();
    
});

When('o usuário remove um item do carrinho de compras', () => { 
    PageCart.removerItemCarrinho();
});
And('o sistema deve atualizar a lista de produtos com sucesso', () => { 
    PageCart.validarCarrinho();

}); 