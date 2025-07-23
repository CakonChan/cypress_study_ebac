const   perfil_carrinho = require("../../fixtures/perfil-carrinho.json")

class exercicio_e2e_funcionliada {

    adicionarProdutoAoCarrinho(nomeProduto, tamanho, cor, quantidade) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
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

        this.adicionarProdutoAoCarrinho('Cassius Sparring Tank', 'S', 'Blue', 3)
        this.adicionarProdutoAoCarrinho('Sinbad Fitness Tank', 'L', 'Blue', 2)
        this.adicionarProdutoAoCarrinho('Grayson Crewneck Sweatshirt', 'XL', 'Red', 1)
        this.adicionarProdutoAoCarrinho('Geo Insulated Jogging Pant', '36', 'Green', 7)
    
    }

    clicarBotaoCarrinho(){
        cy.get('.woocommerce-message > .button').click()
    }

    removerProdutoEscolhido(numero){
        cy.get(':nth-child('+numero+') > .product-remove > .remove > .fa').click()
    }

    validarResumoFinalDaCompra(){
        cy.get('.checkout-button').click()
    }

    preencherDadosNaCompraDeCarrinho(){
        cy.get('#billing_first_name').clear().type(perfil_carrinho.nome)
        cy.get('#billing_last_name').clear().type(perfil_carrinho.sobrenome)
        cy.get('#billing_address_1').clear().type(perfil_carrinho.endereco)
        cy.get('#billing_city').clear().type(perfil_carrinho.cidade)
        cy.get('#select2-billing_state-container').click()
        cy.get('.select2-search__field').clear().type('Bahia{enter}')
        //cy.get('#select2-billing_state-result-axd9-BA').click()
        cy.get('#billing_postcode').clear().type(perfil_carrinho.cep)
        cy.get('#billing_phone').clear().type(perfil_carrinho.telefone)
        
    }

    limparDadosPreenchidosNaCompraDeCarrinho(){
        cy.get('#billing_first_name').clear()
        cy.get('#billing_last_name').clear()
        cy.get('#billing_address_1').clear()
        cy.get('#billing_city').clear()
        cy.get('#billing_postcode').clear()
        cy.get('#billing_phone').clear()
        
    }

    selecionarTransferencia(){
        cy.get('.wc_payment_method.payment_method_bacs').click()
    }
    selecionarCheque(){
        cy.get('.wc_payment_method.payment_method_bacs').click()        
    }
    selecionarPagamentoNaEntregue(){
        cy.get('.wc_payment_method.payment_method_bacs').click()
    }

    aceitoTermosQueNaoLi(){
        cy.get('.woocommerce-terms-and-conditions-checkbox-text').click()
    }

    finalizarPedido(){
        cy.get('#place_order').click()
    }

    validarTelaDeConcluidoPedido(){
        cy.get('.page-title').should('contain', 'PEDIDO RECEBIDO')

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    
        cy.get('.woocommerce-order-details').find('.woocommerce-table__product-name')
        .should('contain', 'Cassius Sparring Tank - S, Blue × 6');

        cy.get('.woocommerce-order-details').find('.woocommerce-table__product-name')
        .should('contain', 'Sinbad Fitness Tank - L, Blue × 4');

        cy.get('.woocommerce-order-details').find('.woocommerce-table__product-name')
        .should('contain', 'Grayson Crewneck Sweatshirt - XL, Red × 2');

    }

    validarSeTentaConcluirPedidoSemDadosNecessariosENaoAceitarTermos(){
        cy.get('.woocommerce-error').should('exist')

        cy.get('.woocommerce-error')
        .should('contain', 'O campo "Nome" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error')
        .should('contain', 'O campo "Sobrenome" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error')
        .should('contain', 'O campo "Endereço" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error')
        .should('contain', 'O campo "Cidade" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error')
        .should('contain', 'O campo "CEP" do endereço de faturamento não é um CEP válido.');

        cy.get('.woocommerce-error')
        .should('contain', 'O campo "Telefone" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error')
        .should('contain', 'Leia e aceite os termos e condições para prosseguir com o seu pedido.');
    }
}

export default new exercicio_e2e_funcionliada()