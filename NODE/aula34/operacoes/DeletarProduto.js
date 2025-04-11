const { where } = require('sequelize')
const Produto = require('../modelos/ProdutosModel')

Produto.destroy({
        where:{
            id:10000
            
        }
    })
    .then(() => {
        console.log('Produto deletado')        
    })
    .catch((erro) => console.log('erro ao deletar o produto', erro))