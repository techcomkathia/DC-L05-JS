// retire todos os números em forma de PILHA da seguinte lista
// mostre no console o valor retirado da pilha e a pilha atualizada

let pilha = [100,200,300,400,500]
console.log(pilha)
let qtd = pilha.length

for(let i = 0; i < qtd; i++){
    console.log(pilha.pop())
    console.log(pilha)
}