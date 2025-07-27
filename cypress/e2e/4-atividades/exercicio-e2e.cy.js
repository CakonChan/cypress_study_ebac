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
        
        exercicioFuncionliadaPage.clicarBotaoCarrinho()
        
        exercicioFuncionliadaPage.removerProdutoEscolhido(4)
        
        exercicioFuncionliadaPage.validarResumoFinalDaCompra()
        
        exercicioFuncionliadaPage.preencherDadosNaCompraDeCarrinho()
        
        exercicioFuncionliadaPage.selecionarTransferencia()
        
        exercicioFuncionliadaPage.selecionarCheque()
        
        exercicioFuncionliadaPage.selecionarPagamentoNaEntregue()
        
        exercicioFuncionliadaPage.aceitoTermosQueNaoLi()
        
        exercicioFuncionliadaPage.finalizarPedido()
        
      
  });

  it('Tentativa de Concluir Compra Sem Dados Necessarios e Nao Aceitar Termos', () => {

        exercicioFuncionliadaPage.montarPedidoCom4ProdutosComFixtureEDadosJsonComEach()
        
        exercicioFuncionliadaPage.clicarBotaoCarrinho()
        
        exercicioFuncionliadaPage.removerProdutoEscolhido(4)
        
        exercicioFuncionliadaPage.validarResumoFinalDaCompra()
        
        exercicioFuncionliadaPage.limparDadosPreenchidosNaCompraDeCarrinho()
        
        exercicioFuncionliadaPage.finalizarPedido()
        
        exercicioFuncionliadaPage.validarSeTentaConcluirPedidoSemDadosNecessariosENaoAceitarTermos()
  });

})