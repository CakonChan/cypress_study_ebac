class ConfirmacaoPage {
  
    validarTelaDeConcluidoPedido(){
        cy.get('.page-title', { timeout: 15000 })
        .should('be.visible')

        cy.get('.woocommerce-notice', { timeout: 10000 })
        .should('be.visible').and('contain', 'Obrigado. Seu pedido foi recebido.')
    
        cy.get('.woocommerce-table').find('.woocommerce-table__product-name').should('contain', 'Tiberius Gym Tank - S, Yellow');

        cy.get('.woocommerce-table').find('.woocommerce-table__product-name').should('contain', 'Sinbad Fitness Tank - L, Blue');

        cy.get('.woocommerce-table').find('.woocommerce-table__product-name').should('contain', 'Grayson Crewneck Sweatshirt - XL, Red');

    }

    validarSeTentaConcluirPedidoSemDadosNecessariosENaoAceitarTermos(){
        cy.get('.woocommerce-error', { timeout: 10000 }).should('be.visible').and('exist')

        cy.get('.woocommerce-error', { timeout: 10000 })
        .should('be.visible').and('contain', 'O campo "Nome" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error', { timeout: 10000 })
        .should('be.visible').and('contain', 'O campo "Sobrenome" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error', { timeout: 10000 })
        .should('be.visible').and('contain', 'O campo "Endereço" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error', { timeout: 10000 })
        .should('be.visible').and('contain', 'O campo "Cidade" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error', { timeout: 10000 })
        .should('be.visible').and('contain', 'O campo "CEP" do endereço de faturamento não é um CEP válido.');

        cy.get('.woocommerce-error', { timeout: 10000 })
        .should('be.visible').and('contain', 'O campo "Telefone" do endereço de faturamento é um campo obrigatório.');

        cy.get('.woocommerce-error', { timeout: 10000 })
        .should('be.visible').and('contain', 'Leia e aceite os termos e condições para prosseguir com o seu pedido.');
    }

}

export default new ConfirmacaoPage()
