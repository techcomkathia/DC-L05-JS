//para a lista de produtos abaixo, mostre o objeto inteiro, para apenas os produtos que tiverem a propriedade cor.

let produtos = [
    {nome: 'celular', preco: 1000.00, quantidade: 10},
    {nome: 'notebook', preco: 2000.00, quantidade: 5, cor: 'preto'},
    {nome: 'tablet', preco: 3000.00, quantidade: 8},
    {nome: 'desktop', preco: 4000.00, quantidade: 3},
    {nome: 'monitores', preco: 5000.00, quantidade: 7},
    {nome: 'mouse', preco: 6000.00, quantidade: 6, cor: 'azul', tamanho: 'grande'},
    {nome: 'teclado', preco: 7000.00,  quantidade: 9},
    {nome: 'headset', preco: 8000.00, quantidade: 4},
    {nome: 'webcam', preco: 9000.00, quantidade: 2, cor: 'branco'},
    {nome: 'microfone', preco: 10000.00},
]

for(let i=0; i<produtos.length; i++){
    let chaves = Object.keys(produtos[i]).includes('cor')
    if(chaves == true){
        console.log(produtos[i])
    }
}

let objeto = {
    nome: 'teclado',
    preco: 150.80,
    
}
console.log(objeto)
console.log(objeto.nome)
let produtoJSON = JSON.stringify(objeto)
console.log(produtoJSON)
console.log(produtoJSON.nome) // undefined pois o json é uma string que nao tem atributo

let objeto2 = JSON.parse(produtoJSON)
console.log(objeto2)