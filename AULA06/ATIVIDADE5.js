//crie um objeto conta bancaria

//com as seguintes propriedades
//agencia
//numero
//digito
//saldo
//emprestimo = 1000
//divida = true

//peça ao usuário o valor para pagamento do emprestimo
//caso o valor do pagamento seja maior que o valor do emprestimo o valor que exceder será adicionado ao saldo e a propriedade dívida será excluida

//caso o valor do pagamento seja menor que o valor do emprestimo. Será debitado do valor de emprestimo

const contaBancaria = {
    agencia: "1234",
    numero: "56789",
    digito: "0",
    saldo: 0,
    emprestimo: 1000,
    divida: true
};

let pagamento = Number(prompt('digite o valor do pagamento'))

if (pagamento > contaBancaria.emprestimo) {
  
    contaBancaria.saldo += pagamento - contaBancaria.emprestimo //adicionando o excedente ao saldo
    contaBancaria.emprestimo = 0 //zerando a divida
    delete contaBancaria.divida  // excluindo a propriedade divida
}
else if ( pagamento < contaBancaria.emprestimo) {
    //debita o emprestimo
    contaBancaria.emprestimo -= pagamento

}
else{
    contaBancaria.emprestimo -= pagamento //0
    delete contaBancaria.divida // excluindo a propriedade divida
}

//como resgatar todas as propriedades de um objeto (apenas as chaves)
let chaves = Object.keys(contaBancaria)


//for especial para objetos
for (let propriedade in contaBancaria){

    console.log(`${propriedade} = ${contaBancaria[propriedade]}`)
}