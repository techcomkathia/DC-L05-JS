// construa um array que guarda suas informações pessoais
// [nome, idade, cor favorita, altura]

let pessoa = ['Káthia', 29, 'verde', 1.56]

// atualize a idade somando 10 anos
pessoa[1] += 10
// cor favorita para azul
pessoa[2] = 'azul'
// altura para 1.80
pessoa[3] = 1.80


// imprima todas as informações do array no formato
// "Eu sou [nome], tenho [idade] anos, minha cor favorita é [cor favorita] e minha altura é [altura] m"
console.log(`Eu sou ${pessoa[0]}, tenho ${pessoa[1]} anos, minha cor favorita é ${pessoa[2]} e minha altura é ${pessoa[3]} m`)

// para adicionar uma informação no array
// por index
console.log(pessoa.length) //4
pessoa[pessoa.length] = 'Feminino'
pessoa[4]= 'F'


// para criar mais 5 informações no array
for(let i = 0; i < 5; i++){
    pessoa[pessoa.length] = `Informação ${i}`
    //5
    //6
    //7
    //8
    //9
    //10
}
console.log(pessoa)
// exibir todas as  informações do array

for(let i = 0; i < pessoa.length; i++){
    console.log(pessoa[i])
}

