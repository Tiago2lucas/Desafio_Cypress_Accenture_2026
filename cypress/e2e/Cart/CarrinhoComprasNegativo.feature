#utf-8
#language: pt

Funcionalidade: Realizar compras e remoção de itens no carrinho


Contexto:
Dado que o usuário acessa a página do Coffee Cart
Quando ele visualiza o menu principal do site

@EmailCampoNameVazio
Cenário: Validar tentativa de checkout com campos obrigatórios vazios
Dado que o usuário está na página do carrinho com produtos adicionados
Quando o usuário seleciona o botão de checkout
E clica em finalizar compra sem preencher nome e e-mail
Então o sistema apresenta popup obrigatórios para name e-mail

@EmailInvalido
Cenário: Validar checkout com formato de e-mail inválido
Dado que o usuário está na página do carrinho com produtos adicionados
Quando o usuário realiza o checkout informando um e-mail sem o caractere @
Então o sistema deve exibir um alerta de validação no campo email
E a mensagem de confirmação de compra não deve ser exibida