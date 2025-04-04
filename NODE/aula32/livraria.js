const express = require('express')
const app = express()

app.use(express.json()) // middleware de body parser ( faz o express compreender o body da requisição no formato json)

let clientes = [
    { id: 1, nome: "joao", email: "j@j.com", senha: "123" },
    { id: 2, nome: "maria", email: "m@m.com", senha: "123" }
]

/* sessão de rotas para livros */

/* sessão de rotas para clientes */
// GET - todos os clientes
app.get('/clientes', (req, res) => {
    res.json(clientes)
    res.status(200)    
})

// POST - cadastrar um novo cliente
app.post('/clientes', (req, res) => {
    let novoCliente = req.body || {}
   
    // verificação de erro
    // caso algum campo nao seja preenchido
    if(!novoCliente.nome || !novoCliente.email || !novoCliente.senha || novoCliente.nome == '' || novoCliente.email == '' || novoCliente.senha == '') {
        res.status(400)
        //resposta um pouco mais detalhada ao usuario sobre o erro
        res.json({error: 'Todos os campos devem ser preenchidos', info: {novoCliente}})
    }
    else{
        //correção do id do novo cliente
        //adicionar o cliente no final da lista de clientes
        novoCliente.id = (clientes[clientes.length-1].id) + 1
        clientes.push(novoCliente)
        res.status(200)
        //resposta um pouco mais detalhada ao usuario
        res.json(
            {
                mensagem: 'Cliente criado com sucesso', 
                info: {novoCliente},
                totalClientes: clientes.length
            })
    }
  

})

app.listen(8000, ()=> console.log('Servidor rodando na porta http://localhost:8000'))