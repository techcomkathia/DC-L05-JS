
/*Desafio de Atendimento com Filas e Pilhas em JavaScript

Implemente uma estrutura de atendimento simulando o fluxo de clientes em um dia de trabalho, com dois tipos de filas:

Fila Geral (10 pessoas): Essa fila representa a fila de atendimento comum.
*/
let filaGeral= ['Ana', 'Bia', 'Carlos', 'Daniel', 'Edson', 'Fernanda', 'Gustavo', 'Helena', 'Igor', 'Joana']

//Pilha de Atendimento Preferencial (3 pessoas): Representa uma pilha para atender clientes prioritários.
let pilhaPreferencial = [ 'Maria', 'Pedro', 'Rafael']
/*Regras do Desafio:

O total de atendimentos realizados no dia será de 8.

A cada atendimento, será atendido um cliente da fila geral e um da pilha preferencial, alternando entre eles, se houver alguém disponível.

Números de atendimento ímpares atendem um cliente da fila geral.
Números de atendimento pares atendem um cliente da pilha preferencial, se houver alguém disponível. Caso contrário, o atendimento vai para a fila geral.

As pessoas que não forem atendidas no dia deverão ser adicionadas a uma nova fila, chamada "Fila para o Próximo Dia".
*/

let filaProximoDia = []

let senhas = 8

// push()--> adicionar no final
// shift()--> retirar do início
// pop()--> retirar do final


for(let i=1; i<senhas; i++){

    // atendimento com senha impar deverá ser retirada da fila geral
    if(i % 2 != 0){
        // retirar com método shift() - ínicio do array
        filaGeral.shift()
    }
    //atendimento por senha par será realizado para a pilha preferencial 
    else{
        //retirada no final do array - pop()
        pilhaPreferencial.pop()
    }
}


console.log(filaGeral)
console.log(pilhaPreferencial)

let tamanhoFila = filaGeral.length

for(let i = 1; i <= tamanhoFila; i++){

    let pessoa = filaGeral.shift()
    filaProximoDia.push(pessoa)
}

