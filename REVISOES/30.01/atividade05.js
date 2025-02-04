// crie um loop q aceite um número positivo entre 20 e 200
let numero = parseInt(prompt('digite um número entr 20 e 200'))
let contador = 0
let soma = 0
if(numero>=20 && numero<=200){ // true podemos seguir com o loop
    
    for(let i = 0; i <= numero; i++){
        contador += 1
        soma += i
        // se o número será mostrado no console
        // se o número for divisiveis por 2 e 5
        if(i%2==0 && i%5==0){
            console.log(i)
        }       
    } 

    console.log(`A soma de todos os números divisiveis do intervalo entre 0 e ${numero} é ${soma}`)
    console.log(`O loop foi executado ${contador} vezes`)

}
else{
    alert('O número digitado está fora do intervalo')
}





// o incremento deverá ser de 1 em 1, iniciando do número 0 até o número digitado pelo usuário
// imprima todos os números divisiveis por 2 e 5 ao mesmo tempo 
// ao final mostre a soma de todos os números do intervalo (incluindo os que não são divisiveis por 2 e 5) e mostre a quantidade de vezes que o loop foi executado


// operadores lógicos :
// == igual, != diferente, > maior que, < menor que, >= maior ou igual, <= menor ou igual
// && e lógico e || ou lógico