/*1) crie uma função que recebe um número e retorna um objeto pela posição no array
crie um teste para verificar se o objeto retornado é igual ao objeto recebido pelo teste.*/

let usuarios = [{nome: 'joao', idade: 30}, {nome: 'jose', idade: 20}, {nome: 'maria', idade: 25}]

function buscarObjeto(posicao){
    return usuarios[ posicao - 1]
}

test('Buscar Objeto 1', () => {
    expect(buscarObjeto(1)).toEqual({nome: 'jose', idade: 20})
   
})

test('Buscar Objeto 2', () => {
    expect(buscarObjeto(2)).toEqual({nome: 'jose', idade: 20})
})