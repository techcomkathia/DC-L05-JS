// requerir a função soma
const soma = require('../soma')

//criar o teste e verificar se o valor retornado é igual ao esperado

//test(nomeTeste, funcaoDeTeste)
test('Soma 2 + 2', () => {
    expect(soma(2, 2)).toBe(4)
})