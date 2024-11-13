// uma loja deseja cadastrar 4 produtos
// cada produto tem seu nome e preço ligados
// a loja deseja seguir o seguinte padrão

let produtos =  [
    ['teclado', 150.80],
    ['monitor', 1100.00],
    ['fone', 400.00]
]
// tamanho 3
//maior indice 2

//leitura dos dados
console.log(produtos[0]) // [ teclado, 150.80]
console.log(produtos[0][0]) // teclado
console.log(produtos[0][1]) // 150.80

//criação

for(let i = 1; i <= 4; i++){
    let indice = produtos.length
    produtos[indice]=[] 
    produtos[indice][0]= prompt('Digite o nome do produto')
    
    produtos[indice][1]= Number(prompt('Digite o valor do produto'))

}


