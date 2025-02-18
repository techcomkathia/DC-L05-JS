// executar no terminal o comando 
// npm install -g json-server

// estruturar um arquivo com um json chamado bancoDados.json

// json-server --watch bancoDados.json


// método padrão do protocolo HTTP é o GET
// porém temos 5 métodos
// GET, POST, PUT, DELETE, PATCH
// GET - buscar dados (ler - R)
// POST - enviar dados (criar - C)
// PUT - atualizar dados (atualizar - U)
// PATCH - atualizar parcial (atualizar - U)
// DELETE - apagar dados (deletar - D)

//fetch(url).then(funçaoDeCallback).then(funçaoDeCallback).catch(funçaoDeCallback)

//get em todos os usuarios
// fetch('http://localhost:3000/usuarios') //promisse
// .then((respostaJson)=>{
//     console.log(respostaJson)
//     // CONVERTER JSON PARA OBJETO
//     return respostaJson.json() // método da promisse para converter json para objeto   
// }).then((objeto)=>{
//     console.log(objeto)
// })
// .catch((erro) => console.log(erro.message))

// faça um get em um usuario especifico, que tem o id 3.
// no console mostre o nome e o email desse usuário


async function buscarUsuario2() {
    try{
        // todo o bloco de execução da função que pode ocasionar algum erro
        let respostaJSON = await fetch('http://localhost:3000/usuarios/77777')
        console.log(respostaJSON)
        let objeto = await respostaJSON.json()
        console.log(objeto)
        console.log(`O nome do usuário 3 é ${objeto.nome} e o email dele é ${objeto.email}`)
    }
    catch(erro){
        console.log(erro.message)
    }
}

// criar um novo usuario no banco de dados
//POST em http://localhost:3000/usuarios

/* fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ informação a ser criada dentro da api})
}*/

function cadastrar(usuarioObjeto){
    let novoUsuario = usuarioObjeto
    fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(novoUsuario)
    })
    .then((respostaJson)=>{
        console.log('deu bom')
        return respostaJson.json()

    })
    .catch((erro) => console.log(erro.message))
}


// crie uma função para atualizar um usuario (PUT) -> id, objetoUsuario
// http://localhost:3000/usuarios/id

function atualizar(id, objetoUsuarioAtualizar){
    fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(objetoUsuarioAtualizar)
        }
    ).catch((erro)=> console.log(erro.message))
}

let btn = document.querySelector('#btn')

//btn.addEventListener('click', buscarUsuario2)
//btn.addEventListener('click', ()=> cadastrar('exvalorParaCadastrar'))
let atualizarUsuario = {
    id: "150",
    nome: 'Astrogildo',
    email: 'astrogildo@gatinho.com',
    senha: 'novaSenha',
    saldo: 10
}
btn.addEventListener('click', ()=>deletarUsuario(2))


function buscarUsuario() {
    fetch('http://localhost:3000/usuarios/7777777')
    .then((respostaJson)=>{
        console.log(respostaJson.status)
        return respostaJson
    })
    .then((respostaJson)=>{
        return respostaJson.json() // converter json para objeto
    })
    .then((objeto)=>{
        console.log(objeto)
        console.log(`O nome do usuário 3 é ${objeto.nome} e o email dele é ${objeto.email}`)
    })
    .catch((erro) => console.log(erro.message))
}



// construa a função para apagar um usuario (DELETE) -> id
// verifiquem se o id existe, se não, apresente uma mensagem ao usuário dizendo que o id procurado não foi encontrado
// status 200 -> sucesso
// status 404 -> não encontrado

function deletarUsuario(id){
    fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }).then((respostaJSON)=>{
        if(respostaJSON.status == 200){
            console.log('o recurso foi excluido com sucesso')
        }
        else if(respostaJSON.status == 404){
            console.log('o id não existe no banco de dados')
        }
    }).catch((erro) => console.log(erro.message))
}







  
 


