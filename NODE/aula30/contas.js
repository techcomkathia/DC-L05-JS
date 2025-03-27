// crie uma classe chamada ContaBancaria (superclasse)
// ela deve ter os seguintes métodos
// depositar
// sacar
// consultarSaldo
// E os seguintes atributos
// titular
// agencia
// numero
// saldo (será privado)

class ContaBancaria { //classe mãe, superclasse ou classe base
    // abstração e encapsulamento
    #saldo

    constructor( numeroDaConta,agencia, titular, saldo ){
        this.numeroDaConta = numeroDaConta
        this.agencia = agencia
        this.titular = titular
        this._saldo = saldo
    }

    depositar( valor ){ 
        this._saldo += valor
        console.log(`Depósito realizado com sucesso. Seu saldo atual é ${this._saldo}`) 
    }

    sacar( valor ){
        if(this._saldo >= valor){
            this._saldo -= valor
            console.log(`Saque realizado com sucesso. Seu saldo atual é ${this._saldo}`)
        }
        else{console.log('Saldo insuficiente')}
    }

    consultarSaldo(){
        console.log(this._saldo)
    }

}


// crie duas classes derivadas: 
// ContaCorrente contará com o atributo limiteEmprestimo

// ContaPoupanca deve ter um atributo percentualRendimento