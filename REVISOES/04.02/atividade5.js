// para um array de palavras, crie um novo array com as palavras que tem mais de 5 letras

let palavras = ['gato','elefante', 'cachorro', 'girafa', 'hipopotamo', 'águia']

//let novoArray = array.filter(callback)
//verificar a quantidade de letras de cada palavra com a proprieda length ( palavras são consideradas arrays )

let palavrasComMaisDe5letras = palavras.filter((palavra)=>{
    console.log(`A palavra ${palavra} tem ${palavra.length} letras`)
    if(palavra.length > 5){
        return palavra
    }
})

console.log(palavrasComMaisDe5letras)