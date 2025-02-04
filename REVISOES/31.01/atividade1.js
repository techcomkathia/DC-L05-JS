// crie 4 funções para as operações básicas matemáticas
// 1 - somar
// 2 - subtrair
// 3 - multiplicar
// 4 - dividir ( faça o teste se o denominador é diferente de zero ) usando if/else
//todas essas funções deverão receber dois parâmetros e retornar o resultado da operação

function soma(num1,num2) {
    let resultadosoma = num1 + num2
    return resultadosoma
}

soma(2,2)
let x = soma(2,2)
console.log(x)  // 4
console.log(soma(10,20)) // 30

function divisao (num1, num2){
    let resultadodivisao = 0

    if(num2 == 0){
        console.log('Divisão por 0 é impossível')
        resultadodivisao = 'Divisão por 0 é impossível'
    }
    else{
        resultadodivisao = num1 / num2
        return resultadodivisao
    }

}
console.log(divisao(10,0)) // Divisão por 0 é impossível
let divisao0 =  divisao(10,0) // 'Divisão por 0 é impossível'
let divisaoValida = divisao(10,2) // 5

function subtracao(num1, num2){
    return num1 - num2
}
console.log(subtracao(10,2)) // 8
let b = subtracao(10,2)
console.log(b)

function multiplicacao(num1, num2){
    return num1 * num2
}
console.log(multiplicacao(10,2))



function exibirSoma(num1, num2){
    let resultado = soma(num1, num2)
    console.log( `O resultado da soma de ${num1} e ${num2} é ${resultado}`)
}

// construa a função calculadora 
// ela vai receber 3 parametros , dois numeros e um símbolo no formato de string ( '+' , '-' , '/' , '*')
// ela irá realizar a operação de acordo com o símbolo passado como terceiro parâmetro (switch case)
// ao final irá exibir o resultado no console

function calculadora (num1, num2, simbolo) {
    let resultado = 0

    switch (simbolo) {

        case '+':
            resultado = soma(num1, num2)    
            break
        case '-':
            resultado = subtracao(num1, num2)
            break
        case '/':
            resultado = divisao(num1, num2)
            break
        case '*':
            resultado = multiplicacao(num1, num2)
            break
        default:
            resultado = 'Operação inválida'
            break
    }

    console.log(`O resultado da operação ${num1} ${simbolo} ${num2} é ${resultado}`)
}