
describe('Testes de autenticação - SauceDemo', () => {

  it('Deve permitir login com credenciais válidas', () => {

    // 1. Acessar o site
    cy.visit('/');

    // 2. Informar o usuário
    cy.get('[data-test="username"]')
      .type('standard_user');

    // 3. Informar a senha
    cy.get('[data-test="password"]')
      .type('secret_sauce');

    // 4. Clicar no botão de login
    cy.get('[data-test="login-button"]')
      .click();

    // 5. Validar se entrou na página de produtos
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Products');

    // 6. Validar a URL
    cy.url()
      .should('include', '/inventory.html');

  });


  it('Deve impedir login com credenciais inválidas', () => {

    // 1. Acessar o site
    cy.visit('/');

    // 2. Informar um usuário inexistente
    cy.get('[data-test="username"]')
      .type('usuario_invalido');

    // 3. Informar uma senha incorreta
    cy.get('[data-test="password"]')
      .type('senha_errada');

    // 4. Clicar no botão de login
    cy.get('[data-test="login-button"]')
      .click();

    // 5. Validar a mensagem de erro
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');

    // 6. Validar que o usuário continua na tela de login
    cy.url()
      .should('not.include', '/inventory.html');

  });


});
