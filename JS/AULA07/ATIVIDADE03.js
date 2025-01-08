// Criar uma função que calcule a área do triangulo com uma função com parametros
// base * altura / 2

// funções com parâmetros

function calcularArea(base, altura) {

    if(base<=0 || altura<=0 || isNaN(base) || isNaN(altura)) {
        // mensagem de erro

        console.log('Base e altura devem ser maiores que zero')
    }
    else{      
        let area = (base * altura) / 2
        console.log(`A area do triangulo de base ${base} e altura ${altura} é : ${area}`)  
    }

}

let area = calcularArea(10,2)
console.log(area)
console.log(calcularArea(10,2))
calcularArea(0,2)
calcularArea(2)