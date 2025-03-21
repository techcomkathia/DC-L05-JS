// crie uma classe chamada ContaBancaria
class ContaBancaria{
    #saldo
    constructor( numeroDaConta, titular, saldo ){
        // numero da conta
        this.numeroDaConta = numeroDaConta
        // titular
        this.titular = titular
        // saldo
        this.#saldo = saldo // configure o saldo como um atributo privado, acessivel apenas dentro da classe
    }

    // ela deve ter os seguintes métodos
    // depositar
    depositar(valor){
        this.#saldo += valor
        console.log('Depósito realizado com sucesso') 
    }
    // sacar
    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
            console.log('Saque realizado com sucesso')
        }
        else{
            console.log('Saldo insuficiente')
        }
    }

    consultarSaldo(){
        console.log(this.#saldo)
    }
}

module.exports = ContaBancaria

// instancie 2 objetos da classe ContaBancaria

let conta1 = new ContaBancaria(1, 'Cleitinho', 1000)
let conta2 = new ContaBancaria(2, 'Sebastião', 5000)

// exiba o saldo de cada conta
console.log(conta1.saldo) // undefined
console.log(conta2.saldo) // undefined
conta1.depositar(500)
conta2.sacar(1000)
conta1.saldo = 0 // impossível, pois o saldo é privado, será criado um novo atributo para conseguir acessar o saldo
console.log(conta1.saldo) // undefined
console.log(conta2.saldo) // undefined


//prive o atributo saldo, para que seja acessível apenas dentro da classe. Faça as adaptações necessárias nos métodos já existentes e crie um método para conseguir ver o saldo da conta