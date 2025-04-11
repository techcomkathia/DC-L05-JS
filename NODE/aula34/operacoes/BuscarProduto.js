const Produto = require('../modelos/ProdutosModel')

Produto.findByPk(1)
    .then((produto) => {

        if(produto){
            console.log('Produto encontrado',produto.toJSON())}
        else{
            console.log('Produto nao encontrado')
        }
    })
    .catch((erro) => console.log('erro ao buscar o produto', erro))