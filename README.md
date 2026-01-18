# ☕ Desafio Técnico: Automação Coffee Cart com Cypress & Cucumber
Este projeto contém uma suíte de testes automatizados para a aplicação Coffee Cart, focando em fluxos de adição de produtos, validação de carrinho, promoções e finalização de compra (Checkout).

## 📊 Cenários Principais
- **Positivo**: Fluxo completo de compra e seleção de itens promocionais (Mocha).
- **Negativo**: Validação de campos obrigatórios (`name`, `email`) e formatos inválidos.

# 🚀 Tecnologias Utilizadas
* Cypress (15.9.0): Framework de automação de testes end-to-end.

* Cypress Cucumber Preprocessor (4.3.1): Permite a escrita de testes utilizando a sintaxe Gherkin (BDD).

* JavaScript: Linguagem base do projeto.

* Page Object Model (POM): Padrão de design para melhor manutenção e organização do código.

## 📁 Estrutura do Projeto
A estrutura segue o padrão Page Objects separando elementos de ação e mapeamento:

```
cypress/
├── e2e/                             # Camada de Negócio (Gherkin)
│   ├── Cart/
│   │   ├── CarrinhoCompras.feature
│   │   └── CarrinhoComprasNegativo.feature
│   └── MenuPrincipal/
│       └── CompraProdutos.feature
├── support/                         # Camada Técnica
│   ├── pages/                       # Page Object Model (POM)
│   │   ├── Cart/
│   │   │   ├── CartElements.js      # Seletores (Ex-Config.Cart.js)
│   │   │   └── CartPage.js          # Ações (Ex-Page.Cart.js)
│   │   └── MenuPrincipal/
│   │       ├── HomeElements.js
│   │       └── HomePage.js
│   ├── step-definitions/            # Implementação dos passos
│   │   ├── Cart/
│   │   └── MenuPrincipal/
│   ├── commands.js
│   └── e2e.js
├── evidencias/                      # Screenshots (Gerada automaticamente)
├── .gitignore                       # Proteção de arquivos
├── cypress.config.js                # Configurações globais
└── package.json                     # Scripts de automação
```
## ⚙️ Configuração e Instalação
Pré-requisitos
* Node.js instalado.

* Gerenciador de pacotes (npm ou yarn).

Instalação
Clone o repositório:

```
git clone https://github.com/Tiago2lucas/Desafio_Cypress_Accenture_2026.git
```
## Instale as dependências:

```
npm install
```

## 🧪 Executando os Testes
Você pode executar os testes de duas formas:

* Interface Gráfica (Cypress Open):
```
npx cypress open
```
Modo Headless (Terminal):
```
npx cypress run
````

## 💡 Detalhes da Implementação
1. Elementos e Localizadores
Os elementos são centralizados em arquivos Config.js dentro de constantes (ex: CartElements), facilitando a manutenção caso o ID ou classe do site mude.

2. Validações Dinâmicas
Cálculo de Carrinho: O projeto possui lógica para percorrer os itens do carrinho, somar os valores individuais e comparar com o valor total exibido no botão de checkout.

Dados Aleatórios: Utilização de Math.random() para gerar nomes e e-mails dinâmicos no formulário de pagamento, evitando duplicidade de dados.

3. Integração Cucumber
As configurações no package.json e cypress.config.js garantem que o Cypress reconheça os arquivos .feature:
```
JSON

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": false,
  "stepDefinitions": "cypress/support/step-definitions/"
}
```
## 🛠️ Funcionalidades Testadas
* [x] Seleção de cafés aleatórios no menu.

* [x] Validação de quantidade de itens no ícone do carrinho.

* [x] Fluxo de promoção (adicionar 3 itens específicos para ganhar brinde).

* [x] Remoção de itens.

* [x] Finalização de compra com preenchimento de formulário.

Desenvolvido por Tiago2lucas
