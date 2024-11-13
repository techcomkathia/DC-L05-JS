// Faça um programa que leia um número inteiro positivo N e imprima todos os números
// naturais de 0 até N em ordem decrescente.

let numUser = Number(prompt('digite um número'))

for(let i = numUser; i >= 0; i--){
    console.log(i)
}