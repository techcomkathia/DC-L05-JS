// construa uma função que recebe dois numeros como parâmetros e uma função de callback (4 operações matemáticas)
// o objetivo da função calculadora é exibir no console o resultado da operação matemática


function soma (num1, num2) {
    return num1 + num2
}

function subtracao (num1, num2) {
    return num1 - num2
}

function divisao (num1, num2) {
    if(num2 == 0){
        return 'Divisão por 0'
    }
    else{
        return num1 / num2
    }

}

function multiplicacao (num1, num2) {
    return num1 * num2
}


//calculadora
function calculadora (funcao, num1, num2) {
    let resultado = funcao(num1, num2)
    console.log(`O resultado da operação ${resultado}`)    
}


calculadora(soma, 10, 20)
calculadora(subtracao, 10, 20)
calculadora(divisao, 10, 20)    
calculadora(multiplicacao, 10, 20)