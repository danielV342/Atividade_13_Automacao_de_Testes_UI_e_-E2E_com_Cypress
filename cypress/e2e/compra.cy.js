
describe('Teste E2E - Finalização de compra', () => {

  it('Deve realizar uma compra com sucesso', () => {

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

    // 5. Acessar o carrinho
    cy.get('.shopping_cart_link')
      .click();

    // 6. Validar o produto no carrinho
    cy.get('.cart_item')
      .should('have.length', 1);

    cy.get('.inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack');

    cy.get('.inventory_item_price')
      .should('have.text', '$29.99');

    // 7. Iniciar o checkout
    cy.get('[data-test="checkout"]')
      .click();

    // 8. Preencher os dados do comprador
    cy.get('[data-test="firstName"]')
      .type('Daniel');

    cy.get('[data-test="lastName"]')
      .type('Viana');

    cy.get('[data-test="postalCode"]')
      .type('50000000');

    // 9. Continuar para a revisão do pedido
    cy.get('[data-test="continue"]')
      .click();

    // 10. Validar a página de resumo
    cy.get('.title')
      .should('have.text', 'Checkout: Overview');

    cy.get('.cart_item')
      .should('have.length', 1);

    cy.get('.inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack');

    // 11. Validar subtotal e total
    cy.get('[data-test="subtotal-label"]')
      .should('contain', '$29.99');

    cy.get('[data-test="total-label"]')
      .should('contain', '$32.39');

    // 12. Finalizar a compra
    cy.get('[data-test="finish"]')
      .click();

    // 13. Validar a confirmação da compra
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');

    cy.get('.complete-text')
      .should('be.visible')
      .and('contain', 'Your order has been dispatched');

  });

});
