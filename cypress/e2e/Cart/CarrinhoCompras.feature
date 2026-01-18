#utf-8
#language: pt

Funcionalidade: Realizar compras e remoção de itens no carrinho

Contexto:
Dado que o usuário acessa a página do Coffee Cart
Quando ele visualiza o menu principal do site

@ValidaItemPromocionalCarrinho
Cenário: Validar adição de produtos com item promocional no carrinho
Quando o usuário seleciona três produtos diferentes
E o sistema deve exibir um modal com oferta promocional do produto Mocha
E o usuário adiciona o produto Mocha ao carrinho de compras
E acessa a página do carrinho de compras
Então o usuário deve visualizar todos os produtos com seus respectivos nomes e preços
E o valor total deve corresponder à soma dos itens adicionados
E o item promocional Mocha deve estar listado no carrinho

@RemoverProduto
Cenário: Validar a remoção de um item do carrinho
Dado que o usuário adicionou três produtos e o item promocional Mocha
E acessa a página do carrinho de compras
Quando o usuário remove um item do carrinho de compras
Então o sistema deve atualizar a lista de produtos com sucesso

@FinalizarCompra
Cenário: Validar o checkout com sucesso
Dado que o usuário está na página do carrinho com produtos adicionados
Quando o usuário realiza o checkout informando nome e e-mail válidos
Então o sistema deve exibir uma mensagem de confirmação de compra com sucesso