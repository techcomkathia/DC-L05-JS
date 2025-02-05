// construa um array com os valores das vendas de 2024 com os 5% de desconto relativo aos impostos

let vendas2024 = [1000, 2500, 8900, 5000, 2500, 1000, 5000, 1000, 2500, 8900, 5000, 2500]


// let novoArray = arrayReferencia.map( funçãoCallback )

//função de callback vai receber o item do array como parâmetro processar o desconto e retornar o desconto. Aproveite e imprima no console os valores que são recebidos a cada execução da função de callback

let vendasComDesconto2024 = vendas2024.map((venda)=>{
    let valorComDesconto = venda*(1-0.05)
    console.log(venda)
    console.log(`O valor com desconto e ${valorComDesconto}`)
    return valorComDesconto
})

console.log(vendasComDesconto2024)
console.log(vendas2024)