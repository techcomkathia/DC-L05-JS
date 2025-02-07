let alunos = [
    {nome: 'Joaquim', notas: [10, 8, 9, 7]},
    {nome: 'Maria', notas: [8, 7, 9, 8]},
    {nome: 'Jose', notas: [6, 5, 7, 8]},
    {nome: 'Pedro', notas: [9, 8, 9, 7]}
]

// para a lista de 4 alunos, calcule a média das notas de cada aluno e crie uma nova propriedade em cada um dos objetos, chamada média, que receba o valor da média das notas.

alunos.forEach(aluno => {
    let somaNotas = aluno.notas.reduce((soma, nota) => soma + nota);
    aluno.media = somaNotas / aluno.notas.length;
});

for (let i= 0; i< alunos.length; i++){ //alunos[0], alunos[1], alunos[2], alunos[3]
    let somaNotas = 0
    for (let j = 0; j < alunos[i].notas.length; j++){
        somaNotas += alunos[i].notas[j] //alunos[0][0] , alunos[0][1], alunos[0][2], alunos[0][3]
    }
    // criação da propriedade média para cada aluno
    alunos[i].media = somaNotas / alunos[i].notas.length
}
