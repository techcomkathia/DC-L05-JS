const express = require('express')

const app = express()

app.use(express.json()) // middleware de recebimento de json

let produtos = [{
    id: 1,
    title: "exemplo",
    price: 0.1,
    description: "string",
    category: "categoria 1",
    image: "http://example.com"
    }]

// app.metodoHTTP('rota', função executada quando a rota for acessada)

app.get('/produtos', (req, res) => {
    res.json(produtos)
    res.status(200)
})

app.post('/produtos', (req, res) => {
    let novoProduto = req.body
    novoProduto.id = produtos[produtos.length-1].id + 1 // incrementa o id do produto

    produtos.push(novoProduto)
    res.status(200).json({mensagem: 'Produto criado com sucesso', info: {novoProduto},
    totalProdutos: produtos.length})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000')
})  