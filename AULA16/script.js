// objetos do document

let form = document.querySelector('form')
let inputNome = document.getElementById('nome_produto')
let inputPreco = document.getElementById('preco')
let inputDescricao = document.getElementById('descricao')
let inputUrlImagem = document.getElementById('url_imagem')
let inputCategoria = document.getElementById('categoria')
let btnCadastrar = document.getElementById('cadastrar')

// adicionar um ouvinte de evento que remove o evento padrão de envio das informações	
form.addEventListener('submit', (e)=> e.preventDefault())

// FUNÇÃO QUE CRIA UM NOVO PRODUTO

