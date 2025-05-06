const express= require('express')
const rotasCategorias = require('./routes/CategoriasRotas')
const rotasLivros = require('./routes/LivrosRotas')
const conectarBanco = require('./conexaoBanco')

const app = express()

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json

app.get('/', (req, res) => {
    res.send('Olá Mundo! Rota principal da minha primeira api')
})

//rotas das categorias
app.use('/categorias', rotasCategorias)

//rotas de livros
app.use('/livros', rotasLivros)
//rotas de autores
//rotas de usuarios

//estabelecer a conexão com o banco de dados
conectarBanco()
//estabelecer o servidor
app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})