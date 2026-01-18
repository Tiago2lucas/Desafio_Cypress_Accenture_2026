import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";

When('o usuário realiza o checkout informando um e-mail sem o caractere @', () => {
    PageCart.selecionarCheckoutCarrinho()
    PageCart.preencheCamposPagamentoEmailErrado()
})
Then('o sistema deve exibir um alerta de validação no campo email', () => {
    PageCart.verificarPopUpEmail()
})

And('a mensagem de confirmação de compra não deve ser exibida', () => {
    PageCart.finalizarCompraSemSucesso()
})