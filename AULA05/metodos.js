let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let tamanho = array.length
console.log(tamanho) //10
//maior indice 9
console.log(array)
array[array.length] = 11
// array[array.length] = 11
console.log(array)
array[0]= 'alterei o valor'
console.log(array)


// metodo push - adiciona um item no final do array
// exatamente igual ao length no index

array.push('abacaxi')
console.log(array)

// adiciona um elemento no ínicio do array
// desloca todos os outros elementos para próximas posições
array.unshift('primeiro item')
console.log(array)


// excluir o ultimo item do array
// retornam o elemento excluido
let excluido = array.pop()
console.log(`O elemento excluido foi: ${excluido}`) 
console.log(array)

// excluir o primeiro item do array
excluido = array.shift()
console.log(`O elemento excluido foi: ${excluido}`)
console.log(array)