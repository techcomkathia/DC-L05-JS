/*- Adivinhação de Número
Objetivo: if.
O programador escolhe um número aleatório entre 1 e 10.
O usuário tenta adivinhar digitando um número pelo prompt().
Caso o usuário acerte, será exibida uma mensagem informando que o número foi adivinhado. 
Caso o usuário erre, ele deverá ser informado se o número escolhido pelo computador era maior ou menor que o digitado por ele.

*/
let numProgramador =  8
let numUsuario = Number(prompt('digite um número'))

if (numProgramador == numUsuario) {
    console.log('Parabéns, vocé acertou')
}
else if(numProgramador > numUsuario){
    console.log('O número escolhido pelo computador era maior')
}
else if(numProgramador < numUsuario){
    console.log('O número escolhido pelo computador era menor')
}
else {
   alert('Entranda inválida')
}

// depois que o usuário digita o número nós temos duas condições
// se o numero for igual : acertou
// se o número for diferente :
    // será feita uma segunda avaliação condicional:
    // se o número digitado pelo usuário for maior : mensagem informando que o número escolhido pelo computador era menor
    // se o número digitado pelo usuário for menor : mensagem informando que o número escolhido pelo computador era maior
