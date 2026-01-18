import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PageCart from "../../pages/Cart/Page.Cart";


When('o usuário seleciona o botão de checkout', () => {
PageCart.selecionarCheckoutCarrinho()
})
And('clica em finalizar compra sem preencher nome e e-mail', () => {
     PageCart.finalizarCompraSemSucesso()
})
Then('o sistema apresenta popup obrigatórios para name e-mail',()=> {
    PageCart.verificaPopUpName()
})




