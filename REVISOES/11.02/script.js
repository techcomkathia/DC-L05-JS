//método para seleção por tag
let itensListas = document.getElementsByTagName('li')
console.log(itensListas) // Todos os elementos com tag li
console.log(itensListas[0]) //apenas o primeiro li do documento

console.log(itensListas[0].innerHTML) // texto (incluso as tags) do primeiro li do documento

console.log(itensListas[0].innerText) // texto sem tags do primeiro li do documento

// modificar o texto do primeiro li do documento
itensListas[0].innerText = 'conteúdo alterado por javascript'

itensListas[1].style.fontSize = '25px'
itensListas[1].style.color = 'red'




//metodo para seleção por classe

let destaque = document.getElementsByClassName('destaque')

//adicionar uma nova classe
destaque[0].classList.add('outraClasse') 
destaque[0].classList.add('terceiraClasse')
console.log(destaque)

//remover uma classe
destaque[0].classList.remove('terceiraClasse') 
console.log(destaque)
console.log(destaque[0].classList)
console.log(destaque.length)
destaque[1].innerText = 'conteúdo'


//metodo para seleção por id

let unico = document.getElementById('primeiroItemLista') //retorna apenas um elemento
unico.innerText = 'unico'
unico.innerHTML = '<strong>unico</strong>'
unico.style.color = 'green'

//querySelector - utilizar o seletor css para selecionar um elemento (primeiro)
let itemID = document.querySelector('#primeiroItemLista')
let itemTag = document.querySelector('li')
console.log(itemTag)

//querySelectorAll - utilizar o seletor css para selecionar todos os elementos
let todosItens = document.querySelectorAll('li')
console.log(todosItens)
let elementosComClasse = document.querySelectorAll('.destaque')
console.log(elementosComClasse)
let unicoElemento = document.querySelector('#primeiroItemLista')

// criação e adição de um novo elemento ( sem ser pela propriedade (innerHtml) das tags pais)
// passo a passo:
// 1 - seleção do elemento pai (aquele que vai receber o conteúdo dentro dele. Ex.: div)
let pai = document.querySelector('#pai')

// 2 -  criação do elemento filho (ex.: <p></p>)
// 2.1 criar o elemento (tag)
let filho = document.createElement('p')
// 2.2 adicionar o texto ao elemento filho
filho.innerHTML = 'Novo parágrafo'

//3 - adicionar o filho ao pai
pai.appendChild(filho)

