
class Gato{
    // o construtor recebe os atributos da classe
    constructor(corGato, tamanho, nome){
        this.cor = corGato
        this.tamanho = tamanho
        this.nome = nome
    }
    // métodos da classe 
    // comportamentos que cada objeto pode realizar

    derrubarCoisas(){
        console.log(`O gato ${this.nome} derrubou uma coisa`)
    }

    miar(){
        console.log(`O gato ${this.nome} miou`)
    }

    dormir(){
        console.log(`O gato ${this.nome} dormiu`)
    }
}

module.exports = Gato