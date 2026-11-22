describe('Testes do carrinho - SauceDemo', () => {

  it('Deve adicionar um produto ao carrinho', () => {

    // 1. Acessar o site
    cy.visit('/');

    // 2. Realizar login
    cy.get('[data-test="username"]')
      .type('standard_user');

    cy.get('[data-test="password"]')
      .type('secret_sauce');

    cy.get('[data-test="login-button"]')
      .click();

    // 3. Validar a página de produtos
    cy.get('.title')
      .should('have.text', 'Products');

    // 4. Adicionar a mochila ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    // 5. Validar o contador do carrinho
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1');

    // 6. Validar a alteração do botão
    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .should('be.visible');

  });


    it('Deve remover um produto do carrinho', () => {

    // 1. Acessar o site
    cy.visit('/');

    // 2. Realizar login
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

    // 3. Adicionar produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    // 4. Confirmar que o contador está em 1
    cy.get('.shopping_cart_badge')
        .should('have.text', '1');

    // 5. Remover o produto
    cy.get('[data-test="remove-sauce-labs-backpack"]')
        .click();

    // 6. Verificar que o contador desapareceu
    cy.get('.shopping_cart_badge')
        .should('not.exist');

    // 7. Verificar que o botão voltou para Add to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .should('be.visible');

    });


    
    it('Deve manter as informações corretas do produto no carrinho', () => {

    // 1. Acessar o site
    cy.visit('/');

    // 2. Realizar login
    cy.get('[data-test="username"]')
        .type('standard_user');

    cy.get('[data-test="password"]')
        .type('secret_sauce');

    cy.get('[data-test="login-button"]')
        .click();

    // 3. Localizar o produto Sauce Labs Backpack
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
        .should('be.visible')
        .within(() => {

        // 4. Validar nome
        cy.get('.inventory_item_name')
            .should('have.text', 'Sauce Labs Backpack');

        // 5. Validar descrição
        cy.get('.inventory_item_desc')
            .should('be.visible')
            .and('contain', 'carry.allTheThings');

        // 6. Validar preço
        cy.get('.inventory_item_price')
            .should('have.text', '$29.99');

        // 7. Adicionar ao carrinho
        cy.get('button')
            .click();

        });

    // 8. Acessar o carrinho
    cy.get('.shopping_cart_link')
        .click();

    // 9. Validar quantidade de produtos
    cy.get('.cart_item')
        .should('have.length', 1);

    // 10. Validar nome no carrinho
    cy.get('.inventory_item_name')
        .should('have.text', 'Sauce Labs Backpack');

    // 11. Validar descrição no carrinho
    cy.get('.inventory_item_desc')
        .should('contain', 'carry.allTheThings');

    // 12. Validar preço no carrinho
    cy.get('.inventory_item_price')
        .should('have.text', '$29.99');

    });




});
