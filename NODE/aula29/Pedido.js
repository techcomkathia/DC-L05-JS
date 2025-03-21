// Classe Pedido
class Pedido{
    #itens
    // atributos
    constructor(cliente, itens){
        this.cliente = cliente
        this.#itens = itens || []
        this.status = 'aberto'
    }

    //metodos
    adicionarItem(nomeItem, precoItem){
        let item = {nome: nomeItem, preco: precoItem}

        this.#itens.push(item)
    }

    finalizar(cancelar){

        if(cancelar){
            this.status = 'cancelado'
            console.log('Pedido cancelado')
        }
        else{
          this.status = 'entregue'
          console.log('Pedido entregue')  
        }
        
    }

    // novo método para acessar todos os itens do pedido, já que esse atributo é privado
    getItens(){
        console.log(this.#itens)
    }
}

let pedido1 = new Pedido('Ana', [{nome: 'Coca-Cola', preco: 5.99}])
console.log(pedido1.status)
//console.log(pedido1.itens)
pedido1.getItens() // substituindo a execução do console.log(pedido1.itens)
let pedido2 = new Pedido('Joao') // sem itens um array vazio
console.log(pedido2.status)
//console.log(pedido2.itens)
pedido2.getItens()// substituindo a execução do console.log(pedido1.itens) pois agora é um atributo privado
/*ATRIBUTOS

// todos os atributos são passados para o construtor
// caracteristicas do pedido : itens, cliente, status
// itens [{nome, preco}]
// cliente - nome

//MÉTODOS
// status - aberto, entregue, cancelado
// são definidas por NomeExemplo() dentro do corpo da classe
// ações - 
// adicionar item ao pedido(nome,preço)
// finalizar pedido*/

pedido2.adicionarItem('Pastel', 15.99)
console.log(pedido2.itens)

pedido1.adicionarItem('Caldo de cana', 5.99)
console.log(pedido1.itens)

pedido1.itens = ' coisinha de coisa'
console.log(pedido1.itens)