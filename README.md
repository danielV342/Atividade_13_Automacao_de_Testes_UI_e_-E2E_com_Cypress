# Atividade 13 - Automação de Testes UI e E2E com Cypress

## 1. Sobre o projeto

Projeto de automação de testes da interface do sistema SauceDemo, utilizando Cypress.

O objetivo é validar o login, a listagem de produtos, o carrinho de compras e a finalização de uma compra.

**Site testado:** https://www.saucedemo.com/

## 2. Tecnologias utilizadas

- Node.js
- NPM
- Cypress
- JavaScript

## 3. Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── autenticacao.cy.js
│   ├── carrinho.cy.js
│   └── compra.cy.js
├── fixtures/
└── support/

cypress.config.js
package.json
package-lock.json
README.md
evidencias/
```

## 4. Cenários automatizados

### Autenticação
- Login com credenciais válidas.
- Bloqueio de login com credenciais inválidas.

### Carrinho
- Adicionar produto ao carrinho.
- Remover produto do carrinho.
- Verificar as informações do produto no carrinho.

### Finalização da compra
- Realizar login.
- Adicionar produto ao carrinho.
- Preencher os dados do comprador.
- Conferir o resumo do pedido.
- Finalizar a compra e validar a confirmação.

## 5. Como executar o projeto

Instale as dependências:

```bash
npm install
```

Abra o Cypress:

```bash
npx cypress open
```

Execute todos os testes pelo terminal:

```bash
npx cypress run
```

## 6. Resultado dos testes

Foram executados 6 testes automatizados:

- Autenticação: 2 aprovados.
- Carrinho: 3 aprovados.
- Finalização da compra: 1 aprovado.

**Resultado geral: 6 testes aprovados e nenhuma falha.**

## 7. Evidências

As capturas de tela dos resultados da execução estão disponíveis na pasta `evidencias`.