const conexao = require('../Conexao')
const Fornecedor = require('../modelos/FornecedorModel')

Fornecedor.create({
    nome: 'Fornecedor 3',
    cnpj: '1234567889',
    endereco: 'Rua 3'
}).then((novoFornecedor) => {
    console.log(`Fornecedor Criado`)
    console.log(novoFornecedor.toJSON())
}).catch((erro) => console.log('erro ao criar o fornecedor', erro))