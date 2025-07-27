class ProdutosPage {

    adicionarProdutoAoCarrinho(nomeProduto, tamanho, cor, quantidade) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search', { timeout: 10000 }).eq(1).click()
        cy.get('.button-variable-item-' + tamanho, { timeout: 10000 }).click()
        cy.get(`.button-variable-item-${cor}`, { timeout: 10000 }).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button', { timeout: 10000 }).click()
        if (quantidade == 1){
            cy.get('.woocommerce-message').should('contain', '“'+nomeProduto+'” foi adicionado no seu carrinho.');
        } else
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “'+nomeProduto+'” foram adicionados no seu carrinho.');

    }
    
    montarPedidoCom4ProdutosComFixtureEDadosJson(){

    cy.fixture('produtos-exercicio').then(dados => {
          let zero = 0, one = 1, two = 2, tree = 3
          this.adicionarProdutoAoCarrinho(
            dados[zero].nomeProduto,
            dados[zero].tamanho,
            dados[zero].cor,
            dados[zero].quantidade,
          )
          this.adicionarProdutoAoCarrinho(
            dados[one].nomeProduto,
            dados[one].tamanho,
            dados[one].cor,
            dados[one].quantidade,
          )
          this.adicionarProdutoAoCarrinho(
            dados[two].nomeProduto,
            dados[two].tamanho,
            dados[two].cor,
            dados[two].quantidade,
          )
          this.adicionarProdutoAoCarrinho(
            dados[tree].nomeProduto,
            dados[tree].tamanho,
            dados[tree].cor,
            dados[tree].quantidade,
          )
        })
    }

    montarPedidoCom4ProdutosComFixtureEDadosJsonComEach(){
        cy.fixture('produtos-exercicio').then((dados) => {
            dados.forEach(produto => {
                this.adicionarProdutoAoCarrinho(produto.nomeProduto, produto.tamanho, produto.cor, produto.quantidade)
            })
        })
    }

    montarPedidoCom4Produtos(){

        this.adicionarProdutoAoCarrinho('Tiberius Gym Tank', 'S', 'Yellow', 3)
        this.adicionarProdutoAoCarrinho('Sinbad Fitness Tank', 'L', 'Blue', 2)
        this.adicionarProdutoAoCarrinho('Grayson Crewneck Sweatshirt', 'XL', 'Red', 1)
        this.adicionarProdutoAoCarrinho('Geo Insulated Jogging Pant', '36', 'Green', 7)
    
    }

}

export default new ProdutosPage()
