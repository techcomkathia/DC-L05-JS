// crie um array de tarefas. Cada tarefa deve ser pedida ao usuário e adicionada ao final do array. Devem ser pedidas 5 tarefas ao usuário

// criar uma variável que armazena um array vazio
let tarefas = []
// um loop para pedir 5 tarefas ao usuário
for(let i = 0; i<5; i++){
    // adicionar as tarefas ao array vazio
    let tarefa = prompt(`Digite a ${i+1}ª tarefa que deseja adicionar a lista`)
    tarefas.push(tarefa) // inserir ao final do array
   // tarefas[i] = tarefa // a adção ao final do array por index
}

// pergunte ao usuário se ele deseja adicionar uma tarefa prioritária
// se ele responder sim, pergunte qual tarefa ele deseja adicionar ao inicio do array
// se ele responder nao, exiba as tarefas no console
let adicionarPrioritaria = confirm('Deseja adicionar uma tarefa prioritária?') // true ou false

if(adicionarPrioritaria){
    let tarefaPrioritaria = prompt('Digite a tarefa prioritária')
    //inserir no início do array
    tarefas.unshift(tarefaPrioritaria)
}

console.log(tarefas)
// mostrar cada uma das tarefas separadamente 

for(let i = 0; i<tarefas.length; i++){
    console.log(tarefas[i])
}