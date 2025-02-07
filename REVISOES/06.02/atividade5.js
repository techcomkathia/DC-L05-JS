// peça ao usuário 2 chaves e 2 valores. Crie um objeto com essas chaves e valores.
// crie o método imprimir para o objeto que mostra o array de chaves e valores desse objeto

let objeto = {}

for(let i = 1; i<=2; i++){
    let chave = prompt(`Digite a ${i}ª chave`)
    let valor = prompt(`Digite o ${i}º valor`)
    objeto[chave] = valor
}

objeto.imprimir = function(){
    console.log(`As chaves para o objeto são: `)
    console.log(Object.keys(objeto))
    console.log(`Os valores para o objeto são: `)
    console.log(Object.values(objeto))
}

objeto.imprimir()
console.log(objeto)

//para uma outra variável, converta o objeto para JSON e imprima no console.

let objetoJSON = JSON.stringify(objeto)
console.log(objetoJSON)
