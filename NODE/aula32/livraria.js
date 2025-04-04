const express = require('express')
const app = express()

app.use(express.json()) // middleware de body parser ( faz o express compreender o body da requisição no formato json)

let clientes = [
    { id: 1, nome: "joao", email: "j@j.com", senha: "123" },
    { id: 2, nome: "maria", email: "m@m.com", senha: "123" }
]

let livros = [
    {
      id: 1,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      ano: 1954,
      preco: 89.9,
      quantidade: 10,
      sinopse: "Uma jornada épica para destruir um anel maligno e salvar a Terra Média.",
      nota: 9.8
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      ano: 1949,
      preco: 45.0,
      quantidade: 15,
      sinopse: "Um futuro distópico onde o governo controla tudo e todos.",
      nota: 9.5
    },
    {
      id: 3,
      titulo: "Dom Quixote",
      autor: "Miguel de Cervantes",
      ano: 1605,
      preco: 59.9,
      quantidade: 8,
      sinopse: "As aventuras do cavaleiro que confundia a realidade com a fantasia.",
      nota: 9.2
    },
    {
      id: 4,
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J.K. Rowling",
      ano: 1997,
      preco: 39.9,
      quantidade: 20,
      sinopse: "A história de um jovem bruxo e sua jornada em Hogwarts.",
      nota: 8.9
    },
    {
      id: 5,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      ano: 1943,
      preco: 29.9,
      quantidade: 25,
      sinopse: "Uma história poética sobre amizade e amor.",
      nota: 9.6
    },
    {
      id: 6,
      titulo: "A Revolução dos Bichos",
      autor: "George Orwell",
      ano: 1945,
      preco: 35.0,
      quantidade: 18,
      sinopse: "Uma alegoria política sobre o poder e a corrupção.",
      nota: 8.3
    },
    {
      id: 7,
      titulo: "Crime e Castigo",
      autor: "Fiódor Dostoiévski",
      ano: 1866,
      preco: 69.9,
      quantidade: 10,
      sinopse: "A luta psicológica de um homem após cometer um crime.",
      nota: 9.4
    },
    {
      id: 8,
      titulo: "O Hobbit",
      autor: "J.R.R. Tolkien",
      ano: 1937,
      preco: 49.9,
      quantidade: 12,
      sinopse: "A aventura de Bilbo Bolseiro para recuperar um tesouro roubado.",
      nota: 8.7
    },
    {
      id: 9,
      titulo: "Moby Dick",
      autor: "Herman Melville",
      ano: 1851,
      preco: 55.0,
      quantidade: 7,
      sinopse: "A obsessão do Capitão Ahab em caçar uma baleia branca.",
      nota: 9.1
    },
    {
      id: 10,
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      ano: 1813,
      preco: 42.0,
      quantidade: 14,
      sinopse: "Uma história sobre amor e diferenças sociais na Inglaterra do século XIX.",
      nota: 8.5
    }
];
//Rota raiz
app.get('/', (req, res) => {
    res.send({
        versao: '1.0.0',
        autor: 'Kathia Rocha',
        descricao: 'API para gerenciamento de livros'})
   
})
/* ROTA PARA LIVROS */
app.get('/livros', (req, res) => {
    // listar todos os livros
    let resposta = livros
    /* incluir parametros de consulta (opcionais) : 
    -notaMinima
    -ano
    -precoMin
    -precoMax
    -quantidadeMin
    -quantidadeMax
    -autor
    -titulo
    */
   const {notaMinima, ano, precoMin, precoMax, quantidadeMin, quantidadeMax, autor, titulo} = req.query

   if(notaMinima){
       resposta = resposta.filter((livro) => livro.nota >= notaMinima)
   }
   if(ano){
       resposta = resposta.filter((livro) => livro.ano == ano)
   }
   if(precoMin){
       resposta = resposta.filter((livro) => livro.preco >= precoMin)
   }
   if(precoMax){
       resposta = resposta.filter((livro) => livro.preco <= precoMax)
   }
   if(quantidadeMin){
       resposta = resposta.filter((livro) => livro.quantidade >= quantidadeMin)
   }
   if(quantidadeMax){
       resposta = resposta.filter((livro) => livro.quantidade <= quantidadeMax)
   }
   if(autor){
       resposta = resposta.filter((livro) => livro.autor == autor)
   }
   if(titulo){
       resposta = resposta.filter((livro) => livro.titulo == titulo)
   }

    res.status(200).json(resposta)
    
})
//POST - criar um novo livro


/* ROTA PARA CLIENTES*/
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