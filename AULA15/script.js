//html
// arquivo js


/* fetch('url') armazenado em uma variável
   utilizar a variavel anterior (JSON) e converter para objeto
   utilizar a variável que é um objeto JS e montar um retorno no seguinte formato

   {
             qtdUsuarios: num,
             usuarios: array de resposta da api [ {}, {}, {} ],
             resultadoDaBusca: 'sucesso'
         }

*/

// criar uma função assíncrona :

async function buscarListaDeUsuarios() {

    // JSON
    let respostaAPI = await fetch('https://fakestoreapi.com/users')

    // objeto JS
    let listaDeUsuarios = await respostaAPI.json()

    // usar a propriedade do array para retornar o tamanho do array
    let qtdUser =  await listaDeUsuarios.length

    let retorno = {
        qtdUsuarios : await qtdUser,
        usuarios : await listaDeUsuarios,
        resultadoDaBusca : 'sucesso'
    }
    console.log(retorno)
    return  retorno
    
}

buscarListaDeUsuarios()



// crie uma função que retorne apenas os emails dos usuarios (array) devolvidos pela API

async function buscarEmail() {
    let usuarios = (await buscarListaDeUsuarios()).usuarios

    let emails = []

    emails = await usuarios.map((item) =>  item.email)

    console.log(emails)

    return emails   
}


buscarEmail()


// https://fakestoreapi.com/docs  USUÁRIOS
