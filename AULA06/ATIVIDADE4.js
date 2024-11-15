// Em um pet shopping existe uma fila de atendimento para os animais.
// Existem 4 animais na fila que é um array
// Cada animal que chega tem as seguintes informações coletadas:
// nome, peso, tipo, tutor.
// cada animal do array, será um objeto. 

// mostre o nome do segundo animal do array. 


const filaAtendimento = [
    { nome: "Rex", peso: 10, tipo: "Cachorro", tutor: "João" },
    { nome: "Mimi", peso: 5, tipo: "Gato", tutor: "Maria" },
    { nome: "Bobby", peso: 8, tipo: "Cachorro", tutor: "Carlos" },
    { nome: "Nina", peso: 2, tipo: "Pássaro", tutor: "Ana" }
];

// Acessa e exibe o nome do segundo animal do array
console.log("O nome do segundo animal é:", filaAtendimento[1].nome);

console.log(filaAtendimento)

//redefinir
filaAtendimento[0].nome = 'Cleitinho'

//apagar / deletar uma propriedade do objeto
delete filaAtendimento[0].peso

console.log(filaAtendimento)