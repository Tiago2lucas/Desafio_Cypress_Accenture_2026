#utf-8
#language: pt

Funcionalidade: Compras de produtos no site Coffee Cart

Contexto: Navegar até a página principal do Coffee Cart
Dado que o usuário acessa a página do Coffee Cart
Quando ele visualiza o menu principal do site


@VerificaTodosProdutosDisponivel
Cenário: Validar produtos disponíveis na loja
Então o sistema deve exibir a listagem de produtos disponíveis

@EscolherProdutos
Cenário: Escolher múltiplos produtos para uma nova compra
Dado que o usuário seleciona os produtos desejados
Quando ele adiciona os produtos ao carrinho de compras
Então o usuário visualiza o valor total dos produtos no botão de checkout

@SelecionarProdutosPromocional
Cenário: Receber promoção ao selecionar múltiplos produtos
Quando o usuário seleciona três produtos diferentes
Então o sistema deve exibir um modal com oferta promocional do produto Mocha
E o usuário adiciona o produto Mocha ao carrinho de compras
E o modal deve ser fechado com sucesso