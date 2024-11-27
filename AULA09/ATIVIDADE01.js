// peça ao usuário um texto e através de manipulação do DOM insira ele no título h3 dentro da primeira div

let tituloH3 = document.getElementsByTagName('h3')
let textoDoUsuario = prompt('Digite um texto')
tituloH3[0].innerHTML = textoDoUsuario