// CONDICIONAIS

// if/else if/ else

let turno = 'noite'
// as 3 possibilidades de turnos são manhã, tarde e noite
// operadores lógicos :
// == igual, != diferente, > maior que, < menor que, >= maior ou igual, <= menor ou igual
// && e lógico e || ou lógico

if(turno == 'manhã'){ //retorna um true ou false
    alert('Bom dia!')
}
else if(turno == 'tarde'){
    alert('Boa tarde!')
}
else if(turno == 'noite'){
    alert('Boa noite!')
}
else{
    // condição final, se nenhuma das condições anteriores for verdadeira

    alert('Turno inválido. Tente novamente')
}
console.log('eu estou fora do if')


// switch/case

let numero = 1

switch (numero) {
    case 1:
        console.log('um')
        break
    case 2:
        console.log('dois')
        break
    case 3:
        console.log('tres')
        break
    default:
        console.log('valor inválido')
        break
}

console.log('eu estou fora do switch')



// LAÇOS DE REPETIÇÃO

// while (enquanto - quando não se tem controle de quantas vezes será repetido o laço)

let contador = 0
let acumulador = 0
let condicao = true

while(condicao){ // enquanto a condição retornar true o laço é repetido
    contador += 1
    acumulador += prompt(`Digite o ${contador} número `)
    // sempre necessário atualizar a condição do laço ( permitindo que haja uma saída do laço)
    condicao = confirm('Deseja continuar?')
}
console.log('saí do while')
console.log(`Para os ${contador} números digitados a soma é ${acumulador}`)


let soma = 0
// for (para - quando se tem controle de quantas vezes é executado o laço)
// declaração e atribuição de valor do iterador -> aquele que controla o loop
// condição de parada - teste lógico
// a forma de incrementar o iterador -> incremento
for(let i = 1; i <= 10; i++){ // esse loop vai ser repetido 10x
    console.log(i)
    soma += i
}
console.log('saí do for')
console.log(soma)















