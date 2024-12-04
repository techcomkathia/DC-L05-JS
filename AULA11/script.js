
function ola(){
    // selecionar o elemento do html que será manipulado e adicionar o texto
    let paragrafo = document.getElementById('saudacao')
    let p = document.querySelector('#saudacao')

    p.innerHTML = 'Oi, tudo bem?'
}

function apagar(){
    let paragrafo = document.getElementById('saudacao')
    paragrafo.innerHTML = ''
} 

function crescer(){
    let img = document.querySelector('img')
    img.src = 'adulto.jpg'
    img.alt = 'gatinho adulto'
    img.style.display = 'block'
    img.style.border = '5px solid red'
}


const formulario = document.querySelector('form')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const btn = document.querySelector('#btnEnviar')

formulario.addEventListener('submit', (e)=> e.preventDefault())

function mostrarInfos(){
    console.log(nome.value)
    console.log(email.value)
}

btn.addEventListener('click', mostrarInfos)