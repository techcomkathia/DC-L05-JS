class Animal{
    constructor(nome){
        this.nome = nome
    }

    emitirSom(){
        console.log('o animal fez um som')
    }

    exibirNome(){
        // metodo para herança de todas as classes filhas
        console.log(this.nome)
    }
}

class Cachorro extends Animal{
    constructor(nome, cor){
        // herança
        super(nome)
        this.cor = cor
    }

    // emitirSom(){
    //     // polimorfismo
    //     console.log(`o cachorro ${this.nome} latiu`)
    // }
}


class Pessoa extends Animal{
    constructor(nome, cpf){
        // herança
        super(nome)
        this.cpf = cpf
    }

    emitirSom(){
        // polimorfismo
        console.log(`A pessoa ${this.nome} disse oi`)
    }
}

let cachorro1 = new Cachorro('Rex', 'preto')
let pessoa1 = new Pessoa('Káthia', '123.456.789-00')
let animal1 = new Animal('cleitinho gato')

// polimorfismo
// cachorro1.emitirSom()
// pessoa1.emitirSom()
// animal1.emitirSom()

// herança
cachorro1.exibirNome()
pessoa1.exibirNome()
animal1.exibirNome()

let listaAnimais = [cachorro1, pessoa1, animal1]

listaAnimais.forEach( animal => animal.emitirSom())

