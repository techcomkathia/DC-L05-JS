// definição de uma função com parâmetros

function somar(num1, num2){
    console.log(`O primeiro número é ${num1} e o segundo número é ${num2}`)
    let resultado = num1 + num2
    console.log(`A soma dos dois números é ${resultado}`)
    // não tem retorno

}

// invocação das funções e passagem de parâmetros
somar(10, 20)
somar(20, 30)
somar(10)// parametros a menos, os valores serão undefined
somar(10, 20, 30) //parametros a mais, serão desconsiderados
somar() // parametros a menos, os valores são undefined

// escopo das funções
let nome =  'Cleitinho'

function mostrarNome(){
    // a função tem acesso ao escopo global ( variáveis definidas fora das funções )
    console.log(`Meu nome é ${nome}`)
    let texto = 'Variável local. Acessível apenas dentro da função'
    // função sem retorno 
}

//console.log(texto)

mostrarNome()

function funcaoComRetorno(){
    let variavelLocal = 10 + 20

    return variavelLocal
}

let x = funcaoComRetorno() // 30
console.log(funcaoComRetorno()) // 30
let y = mostrarNome() // undefined
console.log(y) // undefined
console.log(x)










function oi(){
    return 'Oi, tudo bem?'
}

function bomDia(){
    return 'Bom dia!'
}


function falar(funcao, nome){
    console.log (nome + ' ' + funcao())
   
}

falar(oi, 'Cleitinho') // Cleitinho Oi, tudo bem? 
falar(bomDia, 'Princesa') // Princesa Bom dia!
falar(()=> 'Sou um retorno de uma função', 'Princesa') // ocasiona um erro, pois não exite a função cleitinho

let arrow =() => 2+3
console.log(arrow())

let arrowMuitasLinhas = (um, dois) => {
    console.log('Muitas linhas')
    return um + dois
}

console.log(arrowMuitasLinhas(50,100))