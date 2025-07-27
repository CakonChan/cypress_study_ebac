const perfil_carrinho = require("../../../fixtures/perfil-carrinho-atividade.json")

class CheckoutPage {

    preencherDadosNaCompraDeCarrinho(){
        cy.get('#billing_first_name', { timeout: 10000 }).clear().type(perfil_carrinho.nome)
        cy.get('#billing_last_name', { timeout: 10000 }).clear().type(perfil_carrinho.sobrenome)
        cy.get('#billing_address_1', { timeout: 10000 }).clear().type(perfil_carrinho.endereco)
        cy.get('#billing_city', { timeout: 10000 }).clear().type(perfil_carrinho.cidade)
        cy.get('#select2-billing_state-container', { timeout: 10000 }).click()
        cy.get('.select2-search__field', { timeout: 10000 }).clear().type('Bahia{enter}')
        //cy.get('#select2-billing_state-result-axd9-BA').click()
        cy.get('#billing_postcode', { timeout: 10000 }).clear().type(perfil_carrinho.cep)
        cy.get('#billing_phone', { timeout: 10000 }).clear().type(perfil_carrinho.telefone)
        
    }

    limparDadosPreenchidosNaCompraDeCarrinho(){
        cy.get('#billing_first_name', { timeout: 10000 }).clear()
        cy.get('#billing_last_name', { timeout: 10000 }).clear()
        cy.get('#billing_address_1', { timeout: 10000 }).clear()
        cy.get('#billing_city', { timeout: 10000 }).clear()
        cy.get('#billing_postcode', { timeout: 10000 }).clear()
        cy.get('#billing_phone', { timeout: 10000 }).clear()
        
    }

    selecionarTransferencia(){
        cy.get('.wc_payment_method.payment_method_bacs', { timeout: 10000 }).click()
    }
    selecionarCheque(){
        cy.get('.wc_payment_method.payment_method_bacs', { timeout: 10000 }).click()        
    }
    selecionarPagamentoNaEntregue(){
        cy.get('.wc_payment_method.payment_method_bacs', { timeout: 10000 }).click()
    }

    aceitoTermosQueNaoLi(){
        cy.get('.woocommerce-terms-and-conditions-checkbox-text', { timeout: 10000 }).click()
    }

    finalizarPedido(){
        cy.get('#place_order', { timeout: 10000 }).click()
    }

}

export default new CheckoutPage()
