const express = require('express')
const app = express()
const conectarBanco = require('./conexaoBanco')

app.use(express.json())

const categoriasRotas = require('./rotas/CategoriasRotas')

conectarBanco()

app.use('/categorias', categoriasRotas)
app.get('/', (req, res) => {
    res.send('Olá Mundo! Rota principal da minha primeira api')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})