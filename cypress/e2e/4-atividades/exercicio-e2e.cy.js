/// <reference types="cypress" />

import exercicioFuncionliadaPage from "../../support/pages-objects/exercicio-e2e-funcionalidade.page";

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
        
        //exercicioFuncionliadaPage.adicionarProdutoAoCarrinho('Cassius Sparring Tank', 'S', 'Blue', 3)
        //exercicioFuncionliadaPage.montarPedidoCom4Produtos()
        
        exercicioFuncionliadaPage.montarPedidoCom4ProdutosComFixtureEDadosJson()
        cy.wait(500)
        exercicioFuncionliadaPage.clicarBotaoCarrinho()
        cy.wait(500)
        exercicioFuncionliadaPage.removerProdutoEscolhido(4)
        cy.wait(500)
        exercicioFuncionliadaPage.validarResumoFinalDaCompra()
        cy.wait(500)
        exercicioFuncionliadaPage.preencherDadosNaCompraDeCarrinho()
        cy.wait(500)
        exercicioFuncionliadaPage.selecionarTransferencia()
        cy.wait(500)
        exercicioFuncionliadaPage.selecionarCheque()
        cy.wait(500)
        exercicioFuncionliadaPage.selecionarPagamentoNaEntregue()
        cy.wait(500)
        exercicioFuncionliadaPage.aceitoTermosQueNaoLi()
        cy.wait(500)
        exercicioFuncionliadaPage.finalizarPedido()
        cy.wait(8200)
      
  });

  it('Tentativa de Concluir Compra Sem Dados Necessarios e Nao Aceitar Termos', () => {

        exercicioFuncionliadaPage.montarPedidoCom4ProdutosComFixtureEDadosJsonComEach()
        cy.wait(500)
        exercicioFuncionliadaPage.clicarBotaoCarrinho()
        cy.wait(500)
        exercicioFuncionliadaPage.removerProdutoEscolhido(4)
        cy.wait(500)
        exercicioFuncionliadaPage.validarResumoFinalDaCompra()
        cy.wait(500)
        exercicioFuncionliadaPage.limparDadosPreenchidosNaCompraDeCarrinho()
        cy.wait(500)
        exercicioFuncionliadaPage.finalizarPedido()
        cy.wait(500)
        exercicioFuncionliadaPage.validarSeTentaConcluirPedidoSemDadosNecessariosENaoAceitarTermos()
  });

})