/*Uma concessionária trabalha com diferentes tipos de veículos. Crie uma classe base Veiculo com os atributos marca, modelo, ano e precoBase. Deverá contar com um método chamado calcularPrecoFinal() que retorna o precoBase.


Depois, crie duas subclasses:

Carro: possui um atributo extra chamado numPortas e um método calcularPrecoFinal() que retorna precoBase acrescido de um valor fixo de R$2.000.

Moto: possui um atributo extra chamado cilindradas e um método calcularPrecoFinal() que retorna precoBase com um acréscimo de 10%.

Crie instâncias dessas classes e teste o método calcularPrecoFinal().*/


class Veiculo{
    #precoBase
    constructor(marca,modelo,ano,precoBase){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.#precoBase = precoBase
    }

    calcularPrecoFinal(){
        return this.#precoBase
    }

    getPreco (){
        return this.#precoBase
    }
}

class Carro extends Veiculo{
    constructor(marca,modelo,ano,precoBase,numPortas){
        super(marca,modelo,ano,precoBase)
        this.numPortas = numPortas
    }


    // polimorfismo
    //método calcularPrecoFinal() que retorna precoBase acrescido de um valor fixo de R$2.000.
    calcularPrecoFinal(){
        return super.getPreco() + 2000
    }
}

class Moto extends Veiculo{
    constructor(marca,modelo,ano,precoBase,cilindradas){
        super(marca,modelo,ano,precoBase)
        this.cilindradas = cilindradas
    }

    // polimorfismo
    //método calcularPrecoFinal() que retorna precoBase com um acréscimo de 10%.
    calcularPrecoFinal(){
        return super.getPreco() * 1.1
    }
}

let carro1 = new Carro('Fiat', 'Uno', 2010, 10000, 4)

let moto1 = new Moto('Honda', 'moto', 2010, 10000, 150)

let viculo1 = new Veiculo('Scania','linha G', 2010, 100000)

let listaVeiculos = [carro1, moto1, viculo1]

listaVeiculos.forEach( veiculo => console.log(`O veículo ${veiculo.marca} ${veiculo.modelo} tem um preco original de ${veiculo.getPreco()} e um preco final de ${veiculo.calcularPrecoFinal()}`))


/* A concessionária tem dois tipos de funcionários: Vendedores e Gerentes. Crie uma classe base Funcionario com os atributos nome, salarioBase e cargo. Um método chamado exibir informações  deve ser implementado na classe base e deverá mostrar o nome, o salário e o cargo. O salário deverá ser um atributo privado. 

Depois, crie as subclasses:

Vendedor: recebe um bônus de 10% no salário.
Gerente: recebe um bônus de 20%.

Nas subclasses o método exibir informações deverá mostrar o nome, o cargo e o salário final do funcionário.

Crie 5 instâncias dessas classes, totalizando 10 funcionários e em loop mostre a informação de todos eles.   */