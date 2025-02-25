// O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura)². Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.

// Abaixo de 18,5: Abaixo do peso
// Entre 18,5 e 25: Peso normal
// Entre 25 e 30: Acima do peso
// Acima de 30: Obeso

let peso = Number(prompt('Qual seu peso? (kg)')) 
let altura = Number(prompt('Qual sua altura? (m)'))

let imc = (peso / (altura ** 2))
// NaN

if (isNaN(imc)) {
    console.log(' Vocé digitou uma palavra. Reinicie a aplicação e digite apenas números.')
}
else if(imc < 18.5) {
    console.log('Abaixo do peso')
}
else if(imc >= 18.5 && imc <= 25) {
    console.log('Peso normal')
}
else if(imc >= 25 && imc <= 30) {
    console.log('Acima do peso')
}
else {
    console.log('Obeso')
}
