/*- Adivinhação de Número
Objetivo: if.
O programador escolhe um número aleatório entre 1 e 10.
O usuário tenta adivinhar digitando um número pelo prompt().
Caso o usuário acerte, será exibida uma mensagem informando que o número foi adivinhado. 
Caso o usuário erre, ele deverá ser informado se o número escolhido pelo computador era maior ou menor que o digitado por ele.

*/
let numProgramador =  8
let numUsuario = Number(prompt('digite um número'))
let tentativas = 1

if (numProgramador == numUsuario) {
    console.log('Parabéns, vocé acertou')
}
else {
   alert('Entranda inválida')
   while(numProgramador != numUsuario){
        if(numProgramador > numUsuario){
            numUsuario = Number(prompt('O número escolhido pelo computador é maior. Digite um número para a nova tentativa'))
            tentativas += 1
            
        }
        else{
            numUsuario = Number(prompt('O número escolhido pelo computador é menor. Digite um número para a nova tentativa'))
            tentativas += 1
        }
   }
}
 
// com base no código acima, faça a adaptação para que o usuário digite novamente um número caso ele não tenha acertado. Deverão ser contadas as tentativas até que ele acerte. Ao final deve ser exibida uma mensagem informando quantas tentativas foram necessárias.

