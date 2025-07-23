//<reference type="cypress"/>

const   perfil = require("../../fixtures/perfil.json")

describe('Funcionalidade', () => {

    beforeEach(() => {
        
        cy.visit('minha-conta')

    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso e validar se texto do cliente é mesmo texto esperado', () => {        

        cy.get('#username').type('caio.teste@teste.com.br')

        cy.get('#password').type('bc~xVDmvy6^~$:w')
        
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.testecakon.qacakon (não é caio.testecakon.qacakon? Sair)')

    });

        it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

        cy.get('#username').type('caio.testeInvalido@teste.com.br')

        cy.get('#password').type('bc~xVDmvy6^~$:w')
        
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error').should('exist')
        
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha incorreta', () => {

        cy.get('#username').type('caio.teste@teste.com.br')

        cy.get('#password').type('bc~xVDmvy6^')
        
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')
        
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail caio.teste@teste.com.br está incorreta. Perdeu a senha?')

    });

    it('Deve fazer login com sucesso e validar se texto do cliente é mesmo texto esperado - usando massa de dados', () => {
        cy.get('#username').type(perfil[0].usuario) 
        cy.get('#password').type(perfil[0].senha)
        
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.testecakon.qacakon (não é caio.testecakon.qacakon? Sair)')    
    });

    it('Deve fazer login com sucesso e validar se texto do cliente é mesmo texto esperado - usando fixture', () => {
        cy.fixture('perfil').then(  dados => {
            cy.get('#username').type(dados[0].usuario) 
            cy.get('#password').type(dados[0].senha)
        
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.testecakon.qacakon (não é caio.testecakon.qacakon? Sair)')        
        })
        //podemos colocar fora de fixture tambem, legal saber
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.testecakon.qacakon (não é caio.testecakon.qacakon? Sair)')
            
    });

    it('Deve fazer login com sucesso e validar se texto do cliente é mesmo texto esperado - usando comandos customizados', () => {
        
        cy.login('caio.teste@teste.com.br', 'bc~xVDmvy6^~$:w')

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.testecakon.qacakon (não é caio.testecakon.qacakon? Sair)')        

    });
    
    it('Deve fazer login com sucesso e validar se texto do cliente é mesmo texto esperado - usando comandos customizados e fixture', () => {
        cy.fixture('perfil').then(  dados => {
            cy.login(dados[0].usuario, dados[0].senha)

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.testecakon.qacakon (não é caio.testecakon.qacakon? Sair)')        
        })
        //podemos colocar fora de fixture tambem, legal saber
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.testecakon.qacakon (não é caio.testecakon.qacakon? Sair)')
            
    });
});