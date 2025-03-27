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

    //# isso indica que o atributo é privado
    // _ isso indica que o atributo ou método não deve ser acessado diretamente, mas não impede que ele seja acessado

    constructor( numeroDaConta,agencia, titular, saldo ){
        this.numeroDaConta = numeroDaConta
        this.agencia = agencia
        this.titular = titular
        this.#saldo = saldo
    }

    depositar( valor ){ 
        this.#saldo += valor
        console.log(`Depósito realizado com sucesso. Seu saldo atual é ${this._saldo}`) 
    }

    sacar( valor ){
        if(this.#saldo >= valor){
            this.#saldo -= valor
            console.log(`Saque realizado com sucesso. Seu saldo atual é ${this._saldo}`)
        }
        else{console.log('Saldo insuficiente')}
    }

    consultarSaldo(){
        console.log(this.#saldo)
    }

}


// crie duas classes derivadas: 
// ContaCorrente contará com o atributo limiteEmprestimo
class ContaCorrente extends ContaBancaria{
    #limiteEmprestimo
    constructor(numeroDaConta,agencia, titular, saldo,limiteEmprestimo){
        super(numeroDaConta,agencia, titular, saldo)
        this.#limiteEmprestimo = limiteEmprestimo
    }
}

// ContaPoupanca deve ter um atributo percentualRendimento
class ContaPoupanca extends ContaBancaria{
    #percentualRendimento
    constructor(numeroDaConta,agencia, titular, saldo,percentualRendimento){
        super(numeroDaConta,agencia, titular, saldo)
        this.#percentualRendimento = percentualRendimento
    }
}