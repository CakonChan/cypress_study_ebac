/// <reference types="cypress" />

import nomeFuncionliadaPage from "../../support/pages-objects/nome-funcionliada.page";

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
        
        //nomeFuncionliadaPage.adicionarProdutoAoCarrinho('Cassius Sparring Tank', 'S', 'Blue', 3)
        //nomeFuncionliadaPage.montarPedidoCom4Produtos()
        
        nomeFuncionliadaPage.montarPedidoCom4ProdutosComFixtureEDadosJson()
        cy.wait(500)
        nomeFuncionliadaPage.clicarBotaoCarrinho()
        cy.wait(500)
        nomeFuncionliadaPage.removerProdutoEscolhido(4)
        cy.wait(500)
        nomeFuncionliadaPage.validarResumoFinalDaCompra()
        cy.wait(500)
        nomeFuncionliadaPage.preencherDadosNaCompraDeCarrinho()
        cy.wait(500)
        nomeFuncionliadaPage.selecionarTransferencia()
        cy.wait(500)
        nomeFuncionliadaPage.selecionarCheque()
        cy.wait(500)
        nomeFuncionliadaPage.selecionarPagamentoNaEntregue()
        cy.wait(500)
        nomeFuncionliadaPage.aceitoTermosQueNaoLi()
        cy.wait(500)
        nomeFuncionliadaPage.finalizarPedido()
        cy.wait(8200)
      
  });

  it('Tentativa de Concluir Compra Sem Dados Necessarios e Nao Aceitar Termos', () => {

        nomeFuncionliadaPage.montarPedidoCom4ProdutosComFixtureEDadosJsonComEach()
        cy.wait(500)
        nomeFuncionliadaPage.clicarBotaoCarrinho()
        cy.wait(500)
        nomeFuncionliadaPage.removerProdutoEscolhido(4)
        cy.wait(500)
        nomeFuncionliadaPage.validarResumoFinalDaCompra()
        cy.wait(500)
        nomeFuncionliadaPage.limparDadosPreenchidosNaCompraDeCarrinho()
        cy.wait(500)
        nomeFuncionliadaPage.finalizarPedido()
        cy.wait(500)
        nomeFuncionliadaPage.validarSeTentaConcluirPedidoSemDadosNecessariosENaoAceitarTermos()
  });

})