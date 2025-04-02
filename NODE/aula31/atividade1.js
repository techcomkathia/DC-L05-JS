// instale o express 
// crie a pasta do projeto
// npm init -y
// npm install express

// crie um arquivo chamado server.js
// configure uma rota prinicpal para o método GET e exiba uma mensagem de boas vindas
// crie uma rota chamada produtos para o método GET e exiba uma lista de produtos

let produtos = [
    {id: 1, nome: 'Notebook', preco: 1000, qtd: 10, calcularValor: function(){return this.preco * this.qtd}},
    {id: 2, nome: 'Mouse', preco: 50, qtd: 20, calcularValor: function(){return this.preco * this.qtd}},
    {id: 3, nome: 'Teclado', preco: 100, qtd: 30, calcularValor: function(){return this.preco * this.qtd}}
]

//produtos -> TODOS OS PRODUTOS
//produtos/1 -> UM PRODUTO ESPECIFICO


const express = require('express');

const app = express();

app.get('/', (req, res)=>{res.send('Olá mundo! seja bem vindo')})

// adicione 2 parâmetros de consulta (query params) para a rota produtos 
// precoMinimo
// quantidadeMinima
app.get('/produtos', (req, res) =>{
    const {precoMinimo, qtdMinima} = req.query
    //inicializacao do valor do resultado ( receber todos os produtos)
    let resultado = produtos

    if(precoMinimo){
        resultado = resultado.filter((item)=> item.preco >= precoMinimo)
    }
    if(qtdMinima){
        resultado = resultado.filter((item)=> item.qtd >= qtdMinima)
    }

    res.status(200).json(resultado)
})

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)

    const produto = produtos.find((produto)=> produto.id == id)

    if(produto){
        res.status(200).json(produto)
    }
    else{
        res.status(404).json({error: 'Produto nao encontrado'})
    }

})

app.listen(3000, ()=>{
    console.log('servidor disponível em http://localhost:3000')
})