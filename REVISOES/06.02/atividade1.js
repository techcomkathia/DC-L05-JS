// crie um objeto conta bancária. Deverá ter as seguintes propriedades:
//saldo = 1000
//titular = Cleitinho
//tipo = Conta Corrente
//limiteEmprestimo = 1000
//divida =  falso (booleano)

let contaBancaria = {
    saldo: 1000, // atributo
    titular: "Cleitinho", // atributo
    tipo: "Conta Corrente", // atributo
    limiteEmprestimo: 1000, // atributo
    divida: false // atributo
}

console.log(contaBancaria)
// 1º) Mostre no console o saldo da conta e o nome do titula no formato :
// "O saldo da conta de Cleitinho é 1000"
// incemente o objeto com o método consultarSaldo
contaBancaria.consultarSaldo = function(){
  console.log(`O saldo da conta de ${contaBancaria.titular} é de R$${(contaBancaria.saldo).toFixed(2)}`)  
}

// 2º) Altere o nome do titular para "Cleitinho Lima"
contaBancaria.titular = "Cleitinho Lima"
console.log(contaBancaria)

// 3º) Insira uma nova propriedade chamada agencia e atribua o valor 1234
contaBancaria.agencia = 1234
console.log(contaBancaria)


// crie 2 métodos para o objeto contaBancaria
// 1º) Deposito: recebe um valor e o adiciona ao saldo
contaBancaria.depositar = function (valor){
    contaBancaria.saldo = contaBancaria.saldo + valor
    console.log(`O deposito de R$${(valor).toFixed(2)} foi realizado com sucesso.`)
}
// 2º) Saque: recebe um valor, subtrai do saldo e retorna o valor sacado e o saldo atualizado
contaBancaria.sacar = function (valorSaque){
    if(contaBancaria.saldo >= valorSaque){
        contaBancaria.saldo -= valorSaque
        console.log(`O saque de R$ ${valorSaque.toFixed(2)} foi realizado com sucesso`)
    }else{
        console.log("Saldo insuficiente")
    }
}






