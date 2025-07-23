///<reference types="cypress"/>

import produtosParte2Page from "../../support/pages-objects/produtos-parte2.page";

describe('Funcionalidade: Produtos Parte 2', () => {

  beforeEach(() => {
    produtosParte2Page.visitarUrl()
  });

  it('Deve selecionar um produto da lista', () => {
    produtosParte2Page.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
  });

  it('Deve buscar um produto com sucesso', () => {
      let produto = 'Ajax Full-Zip Sweatshirt'
      produtosParte2Page.buscarProduto(produto)
      cy.get('.product_title').should('contain', produto)
  });

  it('Deve visitar a página do produto', () => {
    produtosParte2Page.visitarProduto('Ajax Full-Zip Sweatshirt')
    cy.get('.product_title').should('contain', 'Ajax Full-Zip Sweatshirt')
  });

  it('Deve adicionar produto ao carrinho', () => {
    let quantidade = 2
    produtosParte2Page.buscarProduto('Ajax Full-Zip Sweatshirt')
    //produtosParte2Page.addProdutoCarrinho()
    produtosParte2Page.addProdutoCarrinho('S', 'Red', quantidade)

    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
  });

  it('Deve adicionar produto ao carrinho porem sem estoque', () => {
    let quantidade = 2
    produtosParte2Page.buscarProduto('Ariel Roll Sleeve Sweatshirt')
    produtosParte2Page.addProdutoCarrinho('S', 'Red', quantidade)

    cy.get('.stock').should('contain', 'Fora de estoque')
  });

  it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
    
    cy.fixture('produtos-parte2').then(dados => {
      let numeroEscolhido = 0
      produtosParte2Page.buscarProduto(dados[numeroEscolhido].nomeProduto)
      produtosParte2Page.addProdutoCarrinho(
        dados[numeroEscolhido].tamanho,
        dados[numeroEscolhido].cor,
        dados[numeroEscolhido].quantidade
      )

      cy.get('.woocommerce-message').should('contain', dados[numeroEscolhido].nomeProduto)
  
    })
    
  });

});
