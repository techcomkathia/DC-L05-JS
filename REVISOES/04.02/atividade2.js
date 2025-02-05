// em uma loja existem 2 filas:
// 1° Fila geral (10 pessoas)
// 2° Fila preferencial (3 pessoas)

// a loja está fechando, serão atendidas apenas 8 pessoas(iniciando pela preferencial)
// de forma alternada, retire um cliente da fila geral (do início) e um cliente da fila preferencial ( do final)
// ambos os casos, deverão ser retirados do array e inseridos no array de atentidos


//ao final mostre a situação das 3 filas (arrays)

let filaGeral = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Edson', 'Fernanda', 'Gustavo', 'Helena', 'Igor', 'Joana']

let filaPreferencial = ['Maria', 'Pedro', 'Rafael']

let atendidos = []

console.log(filaGeral)
console.log(filaPreferencial)
console.log(atendidos)
// laço for
for(let i = 0; i < 8; i++){

    if( i % 2 == 0 && filaPreferencial.length > 0){
        // retirar se o iterador for par e o tamanho da fila preferencial for maior que 0
        let clientePreferencial = filaPreferencial.pop() // retirar do final
        atendidos.push(clientePreferencial) // adicionar ao array de atendidos
    }
    else if(filaGeral.length > 0){
        let clienteGeral = filaGeral.shift() // retirar do início
        atendidos.push(clienteGeral)
    }
    else{
        console.log('Nenhuma pessoa a ser atendida em ambas as filas')
    }

}
console.log(atendidos)
console.log(filaGeral)
console.log(filaPreferencial)

// pop()--> retirar do final
// shift()--> retirar do início
// push()--> adicionar no final