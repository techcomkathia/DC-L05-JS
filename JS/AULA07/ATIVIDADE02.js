
// crie uma função que peça ao usuário um número maior que 1
// e faça a contagem regressiva do número passado pelo usuario (prompt) até 0

// execute a função

function contagemRegressiva(){
    let num = parseInt(prompt('Digite um número maior que 1'))

    if( num < 1 || isNaN(num)){
        alert('Digite um número maior que 1')
        // caso queira garantir que a aplicação só encerre quando o usuário digitar um número maior que 1
        num = parseInt(prompt('Digite um número maior que 1'))
        while( num < 1 || isNaN(num)){
            num = parseInt(prompt('Digite um número maior que 1'))
        }
    }

    for(let i = num; i => 0; i--){
        console(i)
    }

}
//intervalo :)
//20:17 retornamos 