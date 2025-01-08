// peça ao usuário 6 notas e adicione em um array 
// com laço de repetição

let notas = []

let qtdNotas = 6

for(let i = 0; i < qtdNotas; i++){
    notas[i]= Number(prompt(`Digite a ${i+1}ª nota (0 a 10):`))
}

console.log(notas)

// adicione 2 pontos na terceira nota do array, se ela for menor que 8
if(notas[2]<8){
    notas[2]+= 2
}

console.log(notas)


// calcule a média para as notas do array
// com laço de repetição

let somaNotas = 0

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let mediaNotas = somaNotas / notas.length

console.log( notas )
console.log( somaNotas )
console.log( mediaNotas )

