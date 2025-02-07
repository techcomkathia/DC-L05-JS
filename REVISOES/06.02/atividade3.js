// utilizando o loop for especifico para objetos mostre todos as chaves e valores dos objetos produtos dentro do array de produtos.

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

for(let i = 0; i < produtos.length; i++) { // percorre o array de produtos acessando os objetos dentro dele
    console.log(produtos[i]) //objeto atual
    console.log(`---------------------------------------`)
    //loop específico para percorrer todas as propriedades de um objeto
    for(let propriedade in produtos[i] ){
        console.log(`${propriedade}: ${produtos[i][propriedade]}`)
    }
    console.log(`---------------------------------------`)

}