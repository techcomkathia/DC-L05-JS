
/*Desafio de Atendimento com Filas e Pilhas em JavaScript

Implemente uma estrutura de atendimento simulando o fluxo de clientes em um dia de trabalho, com dois tipos de filas:

Fila Geral (10 pessoas): Essa fila representa a fila de atendimento comum.

Pilha de Atendimento Preferencial (3 pessoas): Representa uma pilha para atender clientes prioritários.
Regras do Desafio:

O total de atendimentos realizados no dia será de 8.

A cada atendimento, será atendido um cliente da fila geral e um da pilha preferencial, alternando entre eles, se houver alguém disponível.


Números de atendimento ímpares atendem um cliente da fila geral.
Números de atendimento pares atendem um cliente da pilha preferencial, se houver alguém disponível. Caso contrário, o atendimento vai para a fila geral.

As pessoas que não forem atendidas no dia deverão ser adicionadas a uma nova fila, chamada "Fila para o Próximo Dia".
*/

// push()--> adicionar no final
// shift()--> retirar do início
// pop()--> retirar do final

let filaGeral= ['Ana', 'Bia', 'Carlos', 'Daniel', 'Edson', 'Fernanda', 'Gustavo', 'Helena', 'Igor', 'Joana']

let pilhaPreferencial = [ 'Maria', 'Pedro', 'Rafael']