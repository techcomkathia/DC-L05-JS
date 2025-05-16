describe('template spec', () => {
  it('Verificar titulo da página', () => {
    cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')    //selecionar um elemento de id titulo-principal
    cy.get('#titulo-principal').contains('Bem-vindo ao Teste Cypress')
  })

  it('verificar texto da página', () => {
    cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')
    //selecionar um elemento de class descricao
    cy.get('.descricao').contains('Esta é uma página de teste para comandos básicos do Cypress.')
  })

  it('verifica se o botão pode ser clicado', ()=>{
    cy.visit('http://127.0.0.1:5500/TESTES/cypress/index.html')
    cy.get('#mostrarMensagem').click()
    //caso o botão clicado se a mensagem foi exibida
    cy.get('#mensagem').contains('Você clicou no botão!')
    // caso o texto exibido tem algo parecido com o conteúdo
    cy.get('#mensagem').should('contain', 'Você clicou no botão!')
  })


})