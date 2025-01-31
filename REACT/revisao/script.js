let url = 'https://fakestoreapi.com/products'
// endpoint da api para obter todos os produtos

// GET
fetch(url) //faz a requisição a api e retorna uma promise
    .then((resposta)=>{ 
        // fazer a conversão de json para objeto
        console.log('json convertido')
        return resposta.json() //método para promisses
        }
    ).then((arrayObjetos)=>{
        console.log(arrayObjetos)
        return arrayObjetos[0]
    })
    .then((item)=>{
        console.log('o primeiro objeto é :' + item.id)
    })
    //[... quantos then forem necessários]
    .catch((erro)=>{
        //tratar o erro
    })