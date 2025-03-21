class Pessoa {
    #idade
    #nome

    constructor(idade, nome, cidade, profissao){
        this.#idade = idade
        this.#nome = nome
        this.cidade = cidade
        this.profissao = profissao
    }

    //letitura de um atributo privado
    getIdade(){
        console.log(this.#idade)
    }

    setIdade(novaIdade){
        this.#idade = novaIdade
    }

}

let pessoa1 = new Pessoa(29, 'Káthia', 'Maceió', 'Desenvolvedora')
// acessar atributo público
console.log(pessoa1.cidade)
pessoa1.cidade = 'Fortaleza' //atualização de valores para um campo público
console.log(pessoa1.cidade)
// acessar atributo privado
console.log(pessoa1.idade)
pessoa1.getIdade() //letitura de um atributo privado
pessoa1.setIdade(30) //atualização de valores para um campo privado
pessoa1.getIdade()