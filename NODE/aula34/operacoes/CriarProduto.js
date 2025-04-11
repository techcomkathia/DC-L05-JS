const Produto = require('../modelos/ProdutosModel')

Produto.create({
    nome: 'Produto 30',
    preco: 10.00,
    quantidade: 10,
    fornecedor_id: 3
}).then((novoProduto) => {
    console.log(`Produto Criado`, novoProduto.toJSON())
}).catch((erro) => console.log('erro ao criar o produto', erro))
