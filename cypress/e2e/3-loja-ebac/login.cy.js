//<reference type="cypress"/>

describe('Funcionalidade', () => {

    it('Deve fazer login com sucesso e validar se texto do cliente é mesmo texto esperado', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('caio.teste@teste.com.br')

        cy.get('#password').type('bc~xVDmvy6^~$:w')
        
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, caio.teste (não é caio.teste? Sair)')

    });

        it('Deve fazer login com sucesso e validar comparacao invalida', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('caio.teste@teste.com.br')

        cy.get('#password').type('bc~xVDmvy6^~$:w')
        
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, qualquer (não é caio.teste? Sair)')

    });
    
});