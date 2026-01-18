#utf-8
#language: pt

Funcionalidade: Compras de produtos no site Coffee Cart

Contexto: Nagevar até a página principal do Coffee Cart
Dado o usuario acessar a página Coffe Cart
Quando ele visualiza o menu principal do site

@ValidarProdutos
Cenário: Validar produtos diponiveis  da loja
Entao o sistema deve exibe a listagem de produtos disponíveis

@ComprarMultiplosProdutos
Cenário: Escolher multiplos produtos para uma nova compra
E o usuario seleciona os produtos desejados
Quando ele adicionar produtos ao carrinho de compras
Entao o usuario visualiza o valor total dos produtos adicionados no modal checkout

@PromocaoProdutoMocha
Cenário: Escolha multiplos produtos para recebe uma promocao
Quando o usuario selecionar multiplos produtos
E o sistema deve exibir um modal com oferta promocional do produto Mocha
Entao o usuario adicionar o produto Mocha ao carrinho de compras
E o modal deve ser fechado