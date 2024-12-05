let formulario = document.querySelector('form')
// trazer o primeiro formulario do documento
let atividade = document.querySelector('#atividade')
const btn = document.querySelector('#botao')
let lista = document.querySelector('#lista')

formulario.addEventListener('submit', (e)=> e.preventDefault())

function adicionarTarefa(){
    // criar um elemento li
    let item = document.createElement('li')
    // extrair o texto da atividade do input
    let textoAtividade = atividade.value
    item.innerHTML = textoAtividade
    // adicionar o item ao pai
    lista.appendChild(item)
    // limpar o valor do campo de imput
    atividade.value = ''

}

btn.addEventListener('click', adicionarTarefa)
