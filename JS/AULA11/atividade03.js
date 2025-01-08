const altura = document.getElementById('altura')
const peso = document.querySelector('#peso')
const resultado = document.querySelector('#resultado_imc')
const btnCalcular = document.querySelector('button')

text = ""


function calcularIMC() {

    // trabalhar com o valor dos elementos do document
    imc = peso.value / (altura.value **2)

    if (imc < 18.5) {
    text="Você está abaixo da faixa de IMC esperado"
    } else if (imc < 24.9) {
        text="Você está na faixa de IMC esperado"
    } else if (imc < 29.9) {
        text="Você está na faixa de IMC classificada  como sobrepeso"
    } else if (imc < 39.9) {
        text="Você está na faixa de IMC classificada  como obesidade"
    } else if (imc > 39.9) {
        text="Você está na faixa de IMC classificada  como obesidade mórbida"
    }
}

function mostrarIMC() {

    calcularIMC()

    resultado.innerHTML = `<p> ${text} </p>`

}

btnCalcular.addEventListener('click', mostrarIMC)

// evento para capatar os dados do formulário e calcular o imc
