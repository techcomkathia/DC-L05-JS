let num1 = Number(prompt('digite o primeiro número do intervalo'))
let num2 = Number(prompt('digite o segundo número do intervalo'))

let inicio = Math.min(num1, num2)
let fim = Math.max(num1, num2)

let soma = 0
let multiplicacao = 1

for(let i = inicio; i <= fim; i++){
    if(i % 2 == 0){
        soma += i
    }
    else{
        multiplicacao *= i
    }

}

console.log(`A soma de todos os números pares no intervalo entre ${num1} e ${num2} é ${soma}`)
console.log(`A multiplicação de todos os números ímpares no intervalo entre ${num1} e ${num2} é ${multiplicacao}`)