let letras = ['a', 'b', 'c', 'd', 'e', 'f']

let palavras = ['carro', 'moto', 'bicicleta', 'barco', 'aviao']
console.log(letras)
console.log(letras.length)

// FOREACH - sem retorno
// percorrer o array aplicando uma função recebida como callback
palavras.forEach((itemArray)=>{
    console.log(itemArray)
    console.log(itemArray.toUpperCase())
    console.log(`O item do array tem ${itemArray.length} caracteres`)
})

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//MAP - com retorno
// percorrer o array aplicando uma função recebida como callback e retorna todos os elementos modificados
let numerosDobrados = numeros.map((numero)=> numero * 2)
console.log(numeros)
console.log(numerosDobrados)

// FILTER - com retorno
//percorrer o array aplicando uma função recebida como callback e retorna todos os elementos filtrados

let numerosPares = numeros.filter((numero)=> numero % 2 === 0)
console.log(numeros)
console.log(numerosPares)

//REDUCE - com retorno
// percorrer o array aplicando uma função recebida como callback e retorna todos os elementos modificados somando eles todos

//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = numeros.reduce((soma, numero) => soma + numero, 1000)
console.log(numeros)
console.log(soma)
