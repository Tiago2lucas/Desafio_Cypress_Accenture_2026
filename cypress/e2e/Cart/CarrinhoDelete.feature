
#utf-8
#language: pt



Funcionalidade: Realizar a remocao de produto do carrinho no site Coffee Cart
Contexto: Navegar até a página do carrinho de compras
Dado o usuario acessar a página Coffe Cart
Quando ele visualiza o menu principal do site

Cenario: Valida a remocao de um item do carrinho com sucesso
Quando o usuario selecionar multiplos produtos
E o sistema deve exibir um modal com oferta promocional do produto Mocha
E o usuario adicionar o produto Mocha ao carrinho de compras
E o modal deve ser fechado
E o usuario acessar o carrinho de compras
E o usuario visualiza os produtos adicionados ao carrinho com seus respectivos nomes e preços
E o usuario valida o valor total dos produtos adicionados ao carrinho
Entao o usuario valida o valor do produto promocional adicionado ao carrinho
E o usuario remove um item do carrinho de compras
E o usuario valida que um item foi removido com sucesso do carrinho de compras


