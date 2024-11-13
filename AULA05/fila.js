// filas
// remoção do início
// adição no final 


// cadastre 4 pessoas na fila de atendimento
let fila = []
let pessoasAtendidas = []

for(let i=1; i<=4; i++){
    let pessoa = prompt(`Digite o nome da ${i}ª pessoa`)
    fila.push(pessoa)
}

// atenda apenas uma pessoa da fila 
let removidoFila = fila.shift()
// retirar do início

pessoasAtendidas.push(removidoFila)
// propriedade length traz o tamanho do array
let qtd = pessoasAtendidas.length

for(let i = 0; i < qtd; i++){
    console.log(pessoasAtendidas[i])
}


