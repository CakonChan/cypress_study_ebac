//<reference type="cypress"/>

describe('Funcionalidade', () => {

    beforeEach(() => {
        
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso e validar se texto do cliente é mesmo texto esperado', () => {        

        cy.get('#username').type('caio.teste@teste.com.br')

        cy.get('#password').type('bc~xVDmvy6^~$:w')
        
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.teste (não é caio.teste? Sair)')

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
    
});