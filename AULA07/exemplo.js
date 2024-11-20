let global = 1

function testarVariavel(){
    let local = 100
    global = 500

    console.log(global)
    console.log(local)
}

// testarVariavel()
// console.log(local)
// console.log(global)

// funções com parametros
function saudacao (nome){
    console.log(`Bom dia ${nome}`)
}

function saudacao2 (hora, nome){
    console.log(`Boa ${hora} ${nome}`)
}

// saudacao('Cleitinho', 'outro')
// saudacao2('tarde', 'Cleitinho')

function calculoComRetorno(num){
    return num * 10
}

let resultado = calculoComRetorno(2)
console.log(resultado)

alert(calculoComRetorno(3))

let soma = calculoComRetorno(2) + 1
console.log(soma)

calculoComRetorno(4)
 