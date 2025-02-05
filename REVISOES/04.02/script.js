let coisas = [1 , 'a', true, 4.5, 'casa amarela'] 
console.log(coisas)
console.log(coisas.length)
console.log(coisas[4])
//atualização 
coisas[4] = 'a'
console.log(coisas)

// adicionar um item ao array
// por indice
coisas[coisas.length] = 'b'
console.log(coisas)
// método push
coisas.push('c')
console.log(coisas)

coisas[0]= 'atualização do valor exitente'
console.log(coisas)
// adicionar no inicio do array
coisas.unshift('inserido no início')
console.log(coisas)

// retirada dos elementos do array
// os métodos de exclusão do itens do array retornam o item excluido
// incio
let excluido = coisas.shift()
console.log('Esse item foi excluido: ' + excluido)


// final
let excluidoFinal = coisas.pop()
console.log('Esse item foi excluido: ' + excluidoFinal)
console.log(coisas)

// reduce - retorno que vai ser o 'resumo' do array
//array.reduce(callback, valorInicialAcumulador)
let numeros =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = numeros.reduce((acumulador, item)=>{
    console.log(item)
    return acumulador + (item)},100
 )
console.log(soma)

let letras = ['a', 'b', 'c', 'd', 'e', 'f']

let letrasMaiusculas = letras.map((letra)=>{
    console.log(letra)
    return letra.toUpperCase()
} )

console.log(letrasMaiusculas)
console.log(letras)


// forEach - sem retorno
// percorrer um array aplicando uma função recebida como callback para cada um dos elementos do array
// array.forEach(callback)

let retornoForEach = letras.forEach((letra)=>{
         console.log(letra+10)
    }
)

console.log(retornoForEach)


// filter - com retorno
// percorrer um array aplicando uma função recebida como callback e retorna todos os elementos filtrados
// array.filter(callback)

let arrayPares = numeros.filter((numero)=> numero % 2 == 0)

console.log(arrayPares)
console.log(numeros)
let palavra = 'coisa'
console.log(palavra.length)