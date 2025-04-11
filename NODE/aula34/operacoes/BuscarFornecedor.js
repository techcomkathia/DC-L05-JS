const Fornecedor = require('../modelos/FornecedorModel')

Fornecedor.findByPk(1)
    .then((fornecedor) => {

        if(fornecedor){
            console.log('Fornecedor encontrado',fornecedor.toJSON())}
        else{
            console.log('Fornecedor não encontrado')
        }        
    }).catch((erro) => console.log('erro ao buscar o fornecedor', erro))