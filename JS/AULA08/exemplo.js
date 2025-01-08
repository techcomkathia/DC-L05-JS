// funções de callback 

function bomDia () {
    return 'Bom dia'
}

function boaTarde () {
    return 'Boa tarde'
}

function boaNoite () {
    return 'Boa noite'
}


function saudacao (funcao, nome) { 
    console.log(`${funcao()} ,${nome}!`)
}

// saudacao(bomDia, 'Fernanda')
// saudacao(boaTarde, 'Fernanda')
// saudacao(boaNoite, 'Fernanda')

// arrow function
//funções de seta


//armazenada dentro de uma variável
let minhaVar = () => 'retorna o que estiver depois da seta e dispensa o uso das chaves e do return'
// variavel = () => o que vai ser retornado 
// para arrow functions de apenas uma linha

console.log(minhaVar())


// para arrow functions de mais de uma linha
let outraVariavel = () => {
    let soma = 2 + 2
    return soma 
}
// variavel = () => {
//     o que vai ser retornado
// }
// o uso da palabra return obrigatorio caso haja mais de uma linha e algo a ser retornado
console.log(outraVariavel())

let terceiraVariavel = (a,b) =>{
    let soma = a + b
    soma = soma ** 2
    return soma
}

console.log(terceiraVariavel(2,2))

let meuObjeto = {
    nome: 'teclado',
    preco: 150.80,
    desconto: 0.1,
    quantidade: 10,
    precoComDesconto: function () {
        return meuObjeto.preco * (1 - this.desconto)
    },
    venderProduto: () => {
       this.quantidade -= 1
       return `foi vendido um produto. Quantidade restante ${this.quantidade}`
    }
}

// método venderProduto
let retorno = meuObjeto.venderProduto()
console.log(retorno)

