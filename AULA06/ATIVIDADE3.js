//criem um produto
//com as seguintes propriedades (chaves)
//nome = 'teclado'
//preco = 150.80
//marca = 'logitec'
//quantidade = 50


// mostrem no console o seguinte texto:
// O produto teclado, da marca logitec, tem 50 unidades e custa 150.80

let produto = {
    nome: 'teclado',
    preco: 150.80,
    marca: 'logitec',
    quantidade: 50,
}

console.log(`o produto ${produto.nome}, da marca ${produto.marca}, tem ${produto.quantidade} unidade e custa ${produto.preco}`)


// propriedade disponivel
// produto.disponivel ===> true ou false

//verifique a propriedade quantidade. Caso seja maior ou igual a 1, crie a propriedade disponivel com o valor de true.Caso contrário, crie com o valor de false

// Verifica se a quantidade é maior ou igual a 1

//operador ternario ===> condição ? valor1 (se for verdade): valor2 (se for falsa)
produto.disponivel = produto.quantidade >= 1 ? true : false;

if(produto.quantidade >= 1){
    produto.disponivel = true
}
else{
    produto.disponivel = false
}


