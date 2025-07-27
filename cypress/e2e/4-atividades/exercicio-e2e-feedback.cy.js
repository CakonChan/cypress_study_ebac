/// <reference types="cypress" />

import carrinhoPage from "../../support/pages-objects/4-atividades/carrinho-atividade.pages";

import produtosaPage from "../../support/pages-objects/4-atividades/produtos-atividade.pages";

import checkoutPage from "../../support/pages-objects/4-atividades/checkout-atividade.pages";

import confirmacaoaPage from "../../support/pages-objects/4-atividades/confirmacao-atividade.pages";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('minha-conta')
      cy.fixture('perfil').then(login => {
            cy.login(login[2].usuario, login[2].senha)
        })
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
        
        //produtosaPage.adicionarProdutoAoCarrinho('Cassius Sparring Tank', 'S', 'Blue', 3)
        //produtosaPage.montarPedidoCom4Produtos()
        
        produtosaPage.montarPedidoCom4ProdutosComFixtureEDadosJson()
        
        carrinhoPage.clicarBotaoCarrinho()
        
        carrinhoPage.removerProdutoEscolhido(4)
        
        carrinhoPage.validarResumoFinalDaCompra()
        
        checkoutPage.preencherDadosNaCompraDeCarrinho()
        
        checkoutPage.selecionarTransferencia()
        
        checkoutPage.selecionarCheque()
        
        checkoutPage.selecionarPagamentoNaEntregue()
        
        checkoutPage.aceitoTermosQueNaoLi()
        
        checkoutPage.finalizarPedido()

        confirmacaoaPage.validarTelaDeConcluidoPedido()
        
      
  });

  it('Tentativa de Concluir Compra Sem Dados Necessarios e Nao Aceitar Termos', () => {

        produtosaPage.montarPedidoCom4ProdutosComFixtureEDadosJsonComEach()
        
        carrinhoPage.clicarBotaoCarrinho()
        
        carrinhoPage.removerProdutoEscolhido(4)
        
        carrinhoPage.validarResumoFinalDaCompra()
        
        checkoutPage.limparDadosPreenchidosNaCompraDeCarrinho()
        
        checkoutPage.finalizarPedido()
        
        confirmacaoaPage.validarSeTentaConcluirPedidoSemDadosNecessariosENaoAceitarTermos()
  });

})