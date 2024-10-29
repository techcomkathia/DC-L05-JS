// tipos de declaração das variaveis

// let => aceita declaração e atualização, não aceita redeclaração 
// const => aceita declaração, nao aceita atualização nem redeclaração
// var => aceita declaração, atualização e redeclaração


// DECLARAÇÃO E ATRIBUIÇÃO DE VALOR
let minhaVariavelLET = 1;
const minhaVariavelCONST = "NÃO MUDO DE VALOR";
var minhaVariavelVAR = 3;

// ATUALIZACAO DE VALOR - REATRIBUIÇÃO
minhaVariavelLET = 'dois'
minhaVariavelVAR = '3'

//não é possivel reatribuir uma const
// minhaVariavelCONST = 'mudei de valor'

// REDECLARACAO
console.log(minhaVariavelVAR)
var minhaVariavelVAR = '4'
console.log(minhaVariavelVAR)

// LET não aceita redeclaração
// let minhaVariavelLET = '5'

let nomeUsuario = prompt('Qual seu nome?');


// ATIVIDADE
// leia o nome do usário (PROMPT)
// leia a idade do usário (PROMPT)
// mostre o nome em um alerta
// altere a idade do usuario e mostre no console
