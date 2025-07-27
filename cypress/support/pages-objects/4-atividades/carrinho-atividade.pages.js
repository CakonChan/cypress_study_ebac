class CarrinhoPage {

    clicarBotaoCarrinho(){
        cy.get('.woocommerce-message > .button', { timeout: 10000 }).click()
    }

    removerProdutoEscolhido(numero){
        cy.get(':nth-child('+numero+') > .product-remove > .remove > .fa', { timeout: 10000 }).click()
    }

    validarResumoFinalDaCompra(){
        cy.get('.checkout-button', { timeout: 10000 }).click()
    }

}

export default new CarrinhoPage()