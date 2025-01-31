// uma loja tem uma política de descontos de acordo com a cor das etiquetas.
// verde - 10% | amarelo - 20% | azul - 30% | vermelho - 40%
// a cor da etiqueta deve ser digitada pelo usuário
// e deve ser verificado o valor do produto 
// produtos acima de R$ 1000,00 terão 5% de desconto a mais no preço final
let preco = Number(prompt('Digite o preco do produto'))
let corEtiqueta = prompt('Digite a cor da etiqueta:\n VERDE | AMARELO | AZUL | VERMELHO')
corEtiqueta = corEtiqueta.toUpperCase() // para deixar todas as letras maiúsculas
let desconto = 0
let precoFinal = 0

// para validar o desconto pela cor da etiqueta (switch case)

switch (corEtiqueta) {
    case 'VERDE':
        desconto = 0.1
        break
    case 'AMARELO':
        desconto = 0.2
        break
    case 'AZUL':
        desconto = 0.3
        break
    case 'VERMELHO':
        desconto = 0.4
        break
    default:
        console.log('cor inválida')
        break
}


// para validar o desconto adiconal (if/else)

if(preco > 1000) {
    desconto += 0.05
}

// calcular o preço final
precoFinal = preco * (1 - desconto)  // preco - (preco * desconto)

console.log(`O preco do produto de etiqueta ${corEtiqueta} com o preço inicial de ${preco.toFixed(2)} tem o desconto de ${((desconto * 100).toFixed(2))}% e o preco final de ${precoFinal.toFixed(2)}`)