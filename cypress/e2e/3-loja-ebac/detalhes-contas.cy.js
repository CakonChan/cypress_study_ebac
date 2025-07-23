//<reference type="cypress"/>

describe('Funcionalidade: Detalhes da Conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        //cy.login('caio.teste@teste.com.br', 'bc~xVDmvy6^~$:w')
        cy.fixture('perfil').then(login => {
            cy.login(login[1].usuario, login[1].senha)
        })
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Caio', 'Porto', 'cakon.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});