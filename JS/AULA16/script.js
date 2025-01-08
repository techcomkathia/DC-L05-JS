// objetos do document

let form = document.querySelector('form')
let inputId = document.getElementById('id')
let inputNome = document.getElementById('nome_produto')
let inputPreco = document.getElementById('preco')
let inputDescricao = document.getElementById('descricao')
let inputUrlImagem = document.getElementById('url_imagem')
let inputCategoria = document.getElementById('categoria')
let btnCadastrar = document.getElementById('cadastrar')
let btnAtualizarTotal = document.getElementById('atualizar_total')
let btnAtualizarParcial = document.getElementById('atualizar_parcial')
let btnApagar = document.getElementById('apagar')

// adicionar um ouvinte de evento que remove o evento padrão de envio das informações	
form.addEventListener('submit', (e)=> e.preventDefault())

// FUNÇÃO QUE CRIA UM NOVO PRODUTO
async function cadastrarProduto() {
    try{
        let produto = {
            title: inputNome.value,
            price: inputPreco.value,
            description: inputDescricao.value,
            image: inputUrlImagem.value,
            category: inputCategoria.value
        }
        
        // consumir a API(post)
        // parâmetros para o fetch ( url, objeto com  configurações )
        let response = await fetch('https://fakestoreapi.com/products', 
        {
            method: 'POST',
            body: JSON.stringify(produto) // converte o objeto para json
        })
    
        let obj = await response.json() // converte a resposta para objeto
    
        console.log( {
            status: response.status,
            objetoCriado : obj
        })
    }
    catch(erro){
        console.log(erro.message)
    } 

}

function atualizarTotal(){
    let id = inputId.value
    let produto = {
        title: inputNome.value,
        price: inputPreco.value,
        description: inputDescricao.value,
        image: inputUrlImagem.value,
        category: inputCategoria.value
    }

    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(produto)
    })
    .then((resposta) => resposta.json()) //capta a resposta e converte para objeto
    .then((objeto) => console.log(objeto))
    .catch((erro) => console.log(erro.message))


}

btnCadastrar.addEventListener('click', cadastrarProduto)
btnAtualizarTotal.addEventListener('click', atualizarTotal)

function atualizarParcial(){
    let id= inputId.value
    let produto={}

    if(inputNome.value != ""){
        produto.title = inputNome.value
    }
    if(inputPreco.value != ""){
        produto.price = inputPreco.value
    }
    if(inputDescricao.value != ""){
        produto.description = inputDescricao.value
    }
    if(inputUrlImagem.value != ""){
        produto.image = inputUrlImagem.value
    }
    if(inputCategoria.value != ""){
        produto.category = inputCategoria.value
    }

    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(produto)
    })
    .then((resposta) => resposta.json()) //capta a resposta e converte para objeto
    .then((objeto) => console.log(objeto))
    .catch((erro) => console.log(erro.message))

}

btnAtualizarParcial.addEventListener('click', atualizarParcial)

function apagar(){
    let id = inputId.value

    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
    })
    .then((resposta) => resposta.json()) //capta a resposta e converte para objeto
    .then((objeto) => console.log(objeto))
    .catch((erro) => console.log(erro.message))

}

btnApagar.addEventListener('click', apagar)
