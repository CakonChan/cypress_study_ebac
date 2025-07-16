//<reference type="cypress"/>
import { faker } from '@faker-js/faker';


describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    it('Deve completar o cadastro com sucesso', () => {

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('caio@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.person.firstName('male'))
        cy.get('#account_last_name').type(faker.person.lastName('male'))
       
        cy.wait(5000)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados')

    });

    it('Deve completar o cadastro com sucesso com variaveis', () => {

        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email(nome)


        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('caio@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
       
        cy.wait(5000)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados')

    });

    
});