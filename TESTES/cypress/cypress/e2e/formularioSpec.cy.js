//agrupamento de vários casos de teste
describe('Teste de preenchimento de formulário', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')
    })

    it('verificar se o formulario está visivel', () => {
        //cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')
        cy.get('#form-contato').should('be.visible')
    })

    it('verificar se existem os campos nome, email e mensagem', () => {
        //cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')
        cy.get('#nome').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#mensagem-form').should('be.visible')
    })

    it('preencher e enviar o formulário', () => {
        //cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')
        cy.get('#nome').type('Cleitinho')
        cy.get('#email').type('cleitinho@example.com')
        cy.get('#mensagem-form').type('Ola, tudo bem?')
        //clicar no botão para enviar os dados
        cy.get('button[type="submit"].btn').click()
        cy.get('#form-sucesso').should('be.visible')
    })

    it('verificar se a mensagem de sucesso foi mostrada', () => {
        //cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')
        cy.get('button[type="submit"].btn').click()
        cy.get('#form-sucesso').should('be.visible')
        //verificar o exato texto da mensagem
        cy.get('#form-sucesso').contains('Formulário enviado com sucesso!')
    })

    afterEach( () =>{
        console.log('Depois de cada caso de teste')
    }      
    )

})