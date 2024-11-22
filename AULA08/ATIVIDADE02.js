// Crie uma arrow function que mostre o cálculo de aumento de salario. Deverá ser mostrado o salario antes e depois do percentual informado de aumento, no console. 
// deverão ser passados como parâmetro o salario e o percentual de aumento
// depois de mostar as informações pedidas retorne o novo salario

const aumento = (salario, percentual) => { 
    let salarioAumentado = salario +  salario * (percentual/100)
    // salarioAumentado = salario * ( 1+ (percentual/100))

    console.log(`salário antes do aumento de ${percentual}%: ${salario}`)
    console.log(`salário depois do aumento de ${percentual}%: ${salarioAumentado}`)


    return salarioAumentado
}

console.log(aumento(1000,20))
let retornoFuncAumento = aumento(1000,20)