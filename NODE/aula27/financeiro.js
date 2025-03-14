// crie um módulo chamado Financeiro.js
// ele vai ter duas funções: para calcular um aumento e para calcular um desconto
// ambas as funções devem receber o valor e o percentual pelo terminal
// faça a instalação da dependência prompt-sync
// comando no terminal:  npm install prompt-sync
// e use para receber o valor e o percentual pelo terminal

// exporte os módulos e use em outro arquivo

function aumento(valorAumento, aumentoPercentual){
    console.log(valorAumento*(1+aumentoPercentual))
}
function desconto (valorDesconto, descontoPercentual){
    console.log(valorDesconto*(1-descontoPercentual))
}
module.exports = {aumento, desconto}