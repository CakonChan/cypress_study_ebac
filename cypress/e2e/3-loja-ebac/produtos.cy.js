///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
  });

  it('Deve selecionar um produto da lista com first()', () => {
    cy.get('.product-block')
      .first()
      .click();
  });

  it('Deve selecionar um produto da lista com last()', () => {
    cy.get('.product-block')
      .last()
      .click();
  });

  it('Deve selecionar um produto da lista com eq(2)', () => {
    cy.get('.product-block')
      .eq(2)
      .click();
  });

  it('Deve selecionar o produto "Aero Daily Fitness Tee" com contains e verificar a descrição', () => {
    
    cy.get('.products > .row')
        .contains('Aero Daily Fitness Tee', { timeout: 10000 }).should('be.visible').click();

    cy.get('#tab-title-description > a').should('contain', 'Descrição');
      
  });

});
