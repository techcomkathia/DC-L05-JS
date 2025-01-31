/*Atividade 3 - Caixa eletrônico
Objetivo: Revisar loops e trabalho com diferentes tipos de armazenamento de valores
Escreva programma que receba como entrada o valor do saque realizado pelo cliente
de um banco e retorne quantas notas de cada valor serão necessárias para atender ao
saque com a menor quantidade de notas possível. 
Serão utilizadas notas de 100, 50, 20,10, 5, 2 e 1 real.
Retornar uma string com a quantidade de notas de cada valor.*/

let saque = Number(prompt('Digite o valor do saque'))
let notas100 = 0
let notas50 = 0
let notas20 = 0
let notas10 = 0
let notas5 = 0
let notas2 = 0
let notas1 = 0

// loop das notas 100
while(saque >= 100){ //true
   notas100= notas100 + 1
   saque = saque - 100
}

while(saque >= 50){ //true
    notas50 = notas50 + 1   
    saque = saque - 50
}

while(saque >= 20){ //true
    notas20 = notas20 + 1   
    saque = saque - 20
}

while(saque >= 10){ //true
    notas10 = notas10 + 1   
    saque = saque - 10
}

while(saque >= 5){ //true
    notas5 = notas5 + 1   
    saque = saque - 5
}

while(saque >= 2){ //true
    notas2 = notas2 + 1   
    saque = saque - 2
}   

while(saque >= 1){ //true
    notas1 = notas1 + 1   
    saque = saque - 1
}

console.log(
    `Notas de 100: ${notas100} 
    \n Notas de 50: ${notas50} 
    \n Notas de 20: ${notas20} 
    \n Notas de 10: ${notas10} 
    \n Notas de 5: ${notas5} 
    \n Notas de 2: ${notas2} 
    \n Notas de 1: ${notas1}`
)


