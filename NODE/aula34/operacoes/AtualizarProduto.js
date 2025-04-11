const { where } = require('sequelize')
const Produto = require('../modelos/ProdutosModel')

Produto.update({nome: 'Produto atualizado', preco: 15.00},{where:{id:1}})
    .then(([contagem]) => {

        if(contagem > 0){
            console.log('Informações atualizadas')
        }
        else{
            console.log('Não foi possível atualizar as informações, produto nao encontrado')
        }
        
    })
    .catch((erro) => console.log('erro ao atualizar o produto', erro))