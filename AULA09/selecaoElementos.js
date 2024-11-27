// selecione todos os elementos das listas e armazene-os em uma variável (li)
let itensListas = document.getElementsByTagName('li')
console.log(itensListas)
// mostre a quantidade de elementos armazenados na variável
console.log(`O total de itens de listas na página html é: ${itensListas.length}`)



// selecione  apenas os elementos com a classe "destaque" e armazene-os em uma variável
// mostre o primeiro elemento armazenado na variável
let itensDestaque = document.getElementsByClassName('destaque') 
console.log(itensDestaque)



// selecione apenas o elemento com o id "divComId" e armazene-os em uma variável

let divComId = document.getElementById('divComId')
console.log(divComId)

let naoExiste = document.getElementById('naoExiste')
console.log(naoExiste)

let tagNaoExiste = document.getElementsByTagName('a')
console.log(tagNaoExiste)







