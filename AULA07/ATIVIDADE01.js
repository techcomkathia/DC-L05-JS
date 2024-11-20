// crie uma função que receba um número que será a quantidade de notas a serem informadas pelo usuário
// adicione as notas em um array
// calcule a média das notas
// mostre a média no console


// execute a função passando a quantidade de 5 notas (informada pelo usuário)


// calcularMedia

function calcularMedia(){
    // variáveis locais
    let quantidadeNotas = parseInt(prompt('Digite a quantidade de notas'))
    let notas = []
    let media = 0

    // loop para captar todas as notas
    for(let i=1; i<=quantidadeNotas; i++){
        //adicione as notas em um array
        let nota = Number(prompt(`Digite a nota ${i}`))

        // adicionar a nota ao final do array
        notas.push(nota)
        // somando todas as notas para calcular a média
        media += nota
    }
    // atualização do valor da média ( a media que até agora é a soma das notas será dividida pela quantidade de notas)
    media = media / quantidadeNotas

    console.log(notas)
    console.log(media)
}

calcularMedia()

