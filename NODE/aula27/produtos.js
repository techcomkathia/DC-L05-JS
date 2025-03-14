// crie um módulo chamado Produtos.js
// ele terá 2 funções para listagem de produtos e para verificar se um produto existe dentro de um array.
// ambas as funções devem recever um array de produtos como parâmetro.

// depois de criado os módulos importe em outro arquivo e execute as funções

function listarProdutos(produtos){
    produtos.forEach((produto, index) =>{
        console.log(`${index+1}º produto - ${produto}`)
    });
}

function verificarProduto(produtos, produto){
    if( produtos.includes(produto)){
        console.log(`O produto ${produto} existe na lista de produtos`)
    }else{
        console.log(`O produto ${produto} nao existe na lista de produtos`)
    }
}

module.exports = {listarProdutos, verificarProduto}