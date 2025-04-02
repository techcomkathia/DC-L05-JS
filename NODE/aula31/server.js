const express = require('express')
// criação do app - define as rotas e os métodos HTTP
const app = express()
// criar a rota principal com o método GET
app.get('/', (req, res) => {
    res.send('Olá Mundo! Rota principal da minha primeira api')
})

let obj =  { nome: 'Cleitinho', idade: 13, falar:()=> 'Oi, tudo bem?' }

let listaObjetos = [
    { id:1, nome: 'Cleitinho', idade: 13, falar:()=> 'Oi, tudo bem?' },
    { id:2, nome: 'Nick', idade: 13, falar:()=> 'Oi, tudo bem?' },
    { id:3, nome: 'Snow', idade: 13, falar:()=> 'Oi, tudo bem?' }
]

app.get('/sobre', (req, res) => {
    res.json(obj)
    res.status(200)

    //res.json(obj).status(200)

})

app.get('/objetos', (req, res) => {
    res.json(listaObjetos)
    res.status(200)
})
//http://localhost:3000/objetos/1
app.get('/objetos/:numero', (req, res) => {
    const id = Number(req.params.numero)

    const objetoProcurado = listaObjetos.find((objeto) =>{return (objeto.id == id)})

    if(objetoProcurado){
        res.status(200).json(objetoProcurado)
    }
    else{
        res.status(404).json({error: 'Objeto nao encontrado'})
    }
    
})

// criação do servidor para escutar as requisições
app.listen(3000, ()=>{
    console.log('Servidor disponível em http://localhost:3000')
})