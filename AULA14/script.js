// 2º estruturar o arquivo JS :
// - input CEP
let cep = document.querySelector('#cep')
// - btn pesquisar
let btn = document.querySelector('#btn')
// - div resultado
let resultado = document.querySelector('#resultado')

// - função para pesquisar o cep e exibir os dados

function pesquisarCep(CEP){
    
    let url = `https://viacep.com.br/ws/${CEP}/json/`

    fetch(url) // promisse
    .then((resposta)=> resposta.json()) // conversão de json para objeto
    .then((objeto)=>{
        console.log(objeto)
        let texto = document.createElement('p')
        texto.innerHTML = `Cidade: ${objeto.localidade}, Bairro: ${objeto.bairro}, Logradouro: ${objeto.logradouro}, CEP: ${objeto.cep}`
        resultado.appendChild(texto)

    }) 
    .catch((erro) => {
        console.log('deu ruim')
        let texto = document.createElement('p')
        texto.innerHTML = 'O CEP informado é invalído'
        resultado.appendChild(texto)
    })  // tratamento de erro

}


function buscarCEP(){
    let numeroCep = cep.value
    pesquisarCep(numeroCep)
}


btn.addEventListener('click', buscarCEP)