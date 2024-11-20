



// armazene o retorno das funções em variáveis e mostre no console


// crie uma função que receba como parametro a altura e o peso de uma pessoa
// calcule o IMC
// retorne o IMC
function imc (altura, peso){
    let imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

// execute a função para as seguintes pessoas

// João (1.80, 80)
// Maria (1.65, 60)
// Pedro (1.90, 100)

let imc1 = imc(1.80, 80)
let imc2 = imc(1.65, 60)
let imc3 = imc(1.90, 80)

console.log(imc1)
console.log(imc2)    
console.log(imc3)
