
// crie uma fila de emergência
// a última pessoa a entrar, será a primeira a sair

let emergencia = []
emergencia.push('Káthia')
emergencia.push('João')
emergencia.push('Maria')
emergencia.push('Pedro')
// sempre adicionando ao final

// remoção do último a ser adicionado
let removido = emergencia.pop() //Pedro
console.log(removido)
console.log(emergencia) //['Káthia', 'João', 'Maria']
console.log(emergencia.pop()) // Maria
