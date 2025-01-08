// 18) Faça um programa que gera um número aleatório de 1 a 1000. O usuário deve tentar
// acertar qual o número foi gerado, a cada tentativa o programa deverá informar se o chute é
// menor ou maior que o número gerado. O programa acaba quando o usuário acertar o
// número gerado. O programa deve informar em quantas tentativas o número foi
// descoberto.

let numMisterioso = 400

let chute = Number(prompt('Digite um número entre 1 e 1000'))
let tentativas = 1
//NaN
//isNaN(1) --> false
//isNaN('palavra')--->false
//isNaN(NaN)---> true

//garanta que o usuário digite APENAS números. Enquanto ele digitar palavras (que convertidas para Number retoram NaN) faça ele digitar novamente até que acerte

// não for número e sim palavra
while(isNaN(chute)){
    alert('Você digitou uma palavra. Digite apenas números')
    chute = Number(prompt('Digite  novamente um número entre 1 e 1000'))
    tentativas +=1
}
// o número menor 1
while(chute < 1){
    alert('Você digitou uma número menor que 1')
    chute = Number(prompt('Digite  novamente um número entre 1 e 1000'))
    tentativas +=1
}

//para números diferentes do número misterioso
//mostrar a dica para facilitar 
while (chute != numMisterioso){
    alert('O número digitado é diferente o número misterioso')

    if(chute > numMisterioso){
        alert('O número digitado é maior que o número misterioso')
    }
    else{
        alert('O número digitado é menor que o número misterioso')
    }
    chute = Number(prompt('Digite  novamente um número entre 1 e 1000'))
    tentativas += 1
}

alert(`Parabéns você acertou o número misterioso que é ${numMisterioso}. Você acertou em ${tentativas} tentativas`)
