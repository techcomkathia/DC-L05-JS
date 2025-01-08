// função sem parametros

function funcSemParametros () {
    console.log('Bom dia')
}
// invoca a função
funcSemParametros()

// funções com parametros
function funcComParametros (nome) {
    console.log(`Bom dia ${nome}`)
}
// invoca a função
funcComParametros('Fernanda')
funcComParametros() // undefined

// funções com retorno
function funcComRetorno () {
    return 'Bom dia'
    // após o retorno a função vai encerrar
    // e todo codigo abaixo do return nao vai ser executado
    console.log('após o retorno')
}

// invoca a função
console.log(funcComRetorno()) //imprime Bom dia no console
alert(funcComRetorno()) // usa o retorno da função em um alerta
let saudacao = funcComRetorno() // armazena o retorno da função em uma variável

function bomDia(){
    return ' bomDia'
}

function saudacao(nome){
    //reuso da função bomDia
    let variavel = bomDia() // armazena o retorno da função em uma variável
    console.log(variavel) // imprime o retorno da função na variável
    return `${variavel}, ${nome}!`
}

saudacao('Fernanda') // imprime bomDia, Fernanda!
saudacao('Aline') // imprime bomDia, Aline!


