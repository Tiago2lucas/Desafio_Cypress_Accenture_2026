import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import PageHome from '../pages/MenuPrincipal/Page.Home';

When('o usuario selecionar multiplos produtos', () => {
    PageHome.selecionarQtItemPromo();
  
});
And('o sistema deve exibir um modal com oferta promocional do produto Mocha', () => {
    PageHome.verificarModalAbertoPromocao();
});
Then('o usuario adicionar o produto Mocha ao carrinho de compras', () => {
    PageHome.clicarBotaoYesPromocao();
});

And('o modal deve ser fechado', () => {
    PageHome.verificarModalFechadoPromocao();
}); 