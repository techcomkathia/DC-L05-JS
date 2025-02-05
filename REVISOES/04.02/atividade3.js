// uma loja tem uma lista de faturamento para os 12 meses do ano de 2024. 
// essa loja deseja saber o valor total faturado no ano de 2024 + o valor faturado nos anos anteriores que foi de 500.000,00

let vendas2024 = [1000, 2500, 8900, 5000, 2500, 1000, 5000, 1000, 2500, 8900, 5000, 2500]
let vendasAnosAnteriores = 500000

// mostre no console o valor total faturado até o ano de 2024 considerando que, cada venda de 2024 terá um desconto de impostos de 5%
let totalFaturado = vendas2024.reduce(
    (soma, venda)=>{
        console.log(venda)
        let valorComDesconto = venda*(1-0.05)
        console.log(`O valor com desconto eh ${valorComDesconto}`)
        return soma + valorComDesconto
    },
    vendasAnosAnteriores
)
//array.reduce(callback, valorInicial)

console.log(`O valor total faturado até o ano de 2024 é R$ ${totalFaturado}`) 

