// classe base , classe mãe ou superclasse
class Pessoa{
    #cpf
    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf

    }

    get cpf(){
        return this.#cpf
    }

    saudacao(){
        return ` Oi, tudo bem ${this.nome}? `
    }
}

class Aluno extends Pessoa{
    // método construtor
    constructor(nome, cpf, matricula, curso){
        super(nome, cpf) //chama o construtor da classe base(Pessoa)
        this.matricula = matricula //atributo próprio da clase Aluno
        this.curso = curso //atributo próprio da clase Aluno
    }

    pedirPonto(){
        return `só falta 0.25!`
    }
}

let aluno1 = new Aluno('João', '123.456.789-00', '1234', 'DFS-JS')
console.log(aluno1.saudacao())
console.log(aluno1.pedirPonto())
console.log(aluno1.cpf)

let pessoa = new Pessoa('Káthia', '123.456.789-00')
console.log(pessoa.cpf)