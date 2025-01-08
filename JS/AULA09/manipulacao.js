
// método para buscar por tag (getElementsByTagName)
// retorna um htmlCollection []

let subTitulos = document.getElementsByTagName('h2') // [h2, h2] ou []

// busca por classe
// retorna um htmlCollection [] para toooodas as tags com a mesma classe
let classe = document.getElementsByClassName('destaque') // [p, li, li] ou []


// busca por id
// retorna apenas um elemento 
let comID =  document.getElementById('divComId') // div

//manipulação de texto interno a uma tag
//innerText e innerHTML
// modificando o texto do segundo subtitulo
subTitulos[1].innerHTML = 'Novo sub título'
//innerText - retorna o texto interno da tag (não inclui as tags caso existam)
//innerHTML - retorna o html interno da tag (traz toda a tag e seus conteúdos, caso existam) 






