const meuModulo = require('./modulo1')
const moduloProdutos = require('./produtos')
const prompt = require('prompt-sync')()
const moduloFinanceiro = require('./financeiro')
const fs = require('fs')

let arquivo = 'texto.txt'

// escrever dentro de um arquivo
//fs.appendFileSync(arquivo, texto para escrever)
fs.writeFileSync(arquivo, 'Ola mundo')

// crie uma função que receba um objeto de endereço com as seguintes propriedades
// rua
// numero
// cidade
// estado
// cep
// e escreva esse objeto com suas chaves e valores em um texto corrido dentro de um arquivo txt


/*
let meusProdutos = ['teclado', 'mouse', 'monitor']

moduloProdutos.listarProdutos(meusProdutos)

console.log('------------------')

moduloProdutos.verificarProduto(meusProdutos, 'mouse') // existe no array

moduloProdutos.verificarProduto(meusProdutos, 'abacaxi') // não existe no array

console.log('------------------')*/

/*let entradaUsuario = prompt('Digite alguma coisa: ')

console.log(entradaUsuario)


let valorAumento = Number(prompt('digite o valor para aumento : '))
let aumentoPercentual = Number(prompt('digite o aumento percentual : '))

moduloFinanceiro.aumento(valorAumento,aumentoPercentual)

console.log('----------------')

let valorDesconto = Number(prompt('digite o valor para desconto : '))
let descontoPercentual = Number(prompt('digite o desconto percentual : '))

moduloFinanceiro.desconto(valorDesconto, descontoPercentual)*/




