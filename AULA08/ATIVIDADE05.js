// filtre as pessoas maiores de 18 anos do array de pessoas(objetos) e criar um novo array com essas pessoas chamado pessoasMaiores18(que também contem os objetos em um array)

let pessoas = [
    {nome: 'João', idade: 20},
    {nome: 'Maria', idade: 16},
    {nome: 'Pedro', idade: 25},
    {nome: 'Ana', idade: 17},
    {nome: 'Carlos', idade: 18},
    {nome: 'Rafael', idade: 19},
    {nome: 'Mariana', idade: 21},
    {nome: 'Joana', idade: 22}     
]

// pessoa --------------------- pessoas 
// pessoa.idade

let pessoasMaiores18 = pessoas.filter((x)=> x.idade>=18)
console.log(pessoas)
console.log(pessoasMaiores18)