// uma empresa deseja verificar a possibilidade de desconto para seus produtos na black fraude
// os produtos estao em um array e o valor dos produtos com desconto deve ser armazenado em outro array
//desconto dado aos produtos vai ser de  23%

let precos = [1000.00, 2000.00, 3000.00, 4000.00, 5000.00]

// forEach (sem retorno)
// map (com retorno)

// precosDesconto23

let precosDesconto23 = precos.map((preco)=> preco * (1- 0.23))

console.log(precos)
console.log(precosDesconto23)

precos.forEach((preco)=> {
    console.log(`O preco sem o desconto de 23% eh ${preco}`)
    console.log(`O preco com o desconto de 23% eh ${preco * (1- 0.23)}`)
})

console.log(precos)