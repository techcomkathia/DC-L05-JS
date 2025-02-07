// definição de um objeto
let pessoa = {
    nome : 'Káthia', //atributo
    idade: 29, //atributo
    profissao: 'Desenvolvedora', //atributo
    darOi : ()=>{ //método
        alert('Oi, meu nome é ' + pessoa.nome)
    }

}

/*
pessoa.darOi()
console.log(pessoa)
console.log(pessoa.idade)

// atualização de valor de uma propriedade (chave)
pessoa.idade = 30
console.log(pessoa)

// criação de uma nova propriedade
pessoa.email = 'kathia.karine@gmail.com'
console.log(pessoa)

// definição de um novo método para um objeto já criado
pessoa.novaFuncao = () => {
    console.log('Nova função criada')
}

console.log(pessoa)
pessoa.novaFuncao()

console.log('Loop for especial para objetos')
// loop for especifico para objetos (for in)
for (let chave in pessoa){
    console.log(`chave : ${chave}, valor : ${pessoa[chave]}`)
}
*/
// métodos do Object que podem auxiliar na manipulação de objetos
// para resgatar um array com todos os valores
let valores = Object.values(pessoa)
console.log(valores)

// para resgatar um array com todas as chaves
let chaves = Object.keys(pessoa)
console.log(chaves)

// método inclues para arrays - que retorna um booleano (verdadeiro ou falso) para verificar se um item existe em um array
console.log(chaves.includes('CPF')) // retorna true ou false
console.log(pessoa.CPF)
console.log(valores.includes('secretária'))

