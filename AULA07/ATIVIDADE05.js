function imc (altura, peso){
    let imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

// crie uma função avalia o IMC ela deve receber como parametro a altura e o peso de uma pessoa
// utilize a função imc para calcular o IMC
// avalie o resultado do IMC e mostre na tela se a pessoa esta ou não com o peso ideal:
// Abaixo do Peso (IMC abaixo de 18,5)
// Peso Normal (IMC entre 18,5 e 24,9)
// Sobrepeso (IMC entre 25 e 29,9)
// Obesidade (IMC maior 30 )
// o resultado deve ser retornado como string

function avaliarIMC(altura, peso) {
    let resultado = imc(altura, peso);
    if (resultado < 18.5) {
        return "Abaixo do peso";
    }
    else if (resultado <= 24.9)
        {
          return "Peso Normal";  
        } 
    else if (resultado <= 29.9){
        return "Obesidade";
    } 
}

console.log(avaliarIMC(1.80, 80)); // Peso Normal
console.log(avaliarIMC(1.65, 60)); // Peso Normal
console.log(avaliarIMC(1.90, 80)); // Abaixo do peso

