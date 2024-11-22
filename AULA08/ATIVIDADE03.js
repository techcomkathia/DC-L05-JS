// crie um objeto conta bancaria
// com as seguintes propriedades (chaves)
// saldo = 1000
// agencia = 1234
// conta = 12345
// crie os métodos (funções):
// depositar : recebe um valor e o adiciona ao saldo
// sacar : recebe um valor, subtrai do saldo e retorna o valor sacado e o saldo atual
// extrato: mostra o saldo e as informações da conta no console


let contaBancaria = {
    saldo: 1000,
    agencia: 1234,
    conta: 12345,
    depositar: (valor)=>{ 
        contaBancaria.saldo += valor
        return `Depósito de ${valor} dinheiros realizado com sucesso. Seu saldo atual é ${contaBancaria.saldo}`
    },
    sacar: (valor) =>{
        if(contaBancaria.saldo >= valor){
            contaBancaria.saldo -= valor
            return `Saque de ${valor} dinheiros realizado com sucesso. Seu saldo atual é ${contaBancaria.saldo}`
        }
        else{
            return `Saldo insuficiente. Seu saldo atual é ${contaBancaria.saldo}`
        }
    },
    extrato: ()=> `Saldo atual: ${contaBancaria.saldo}`
}

// execute o saque de 50 dinheiros
contaBancaria.sacar(50)
// execute o depósito de 100 dinheiros
contaBancaria.depositar(100)
// execute o extrato
console.log(contaBancaria.extrato())
