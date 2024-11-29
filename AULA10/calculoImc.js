// ------------lógica da questão-----------------
// peso (pedido do usuário)
let peso = Number(prompt('Qual seu peso? (kg)'))
// altura (pedido do usuário)
let altura = Number(prompt('Qual sua altura? (m)'))
// imc ---> calculado
let imc = peso / (altura ** 2)
// -----------------------------------------------

// ----------manipular o DOM----------------------
// div id =peso
    let divPeso = document.querySelector('#peso')

// div id =altura
    let divAltura = document.querySelector('#altura')
// p id= pesoInfo
    let pPesoInfo = document.querySelector('#pesoInfo')
// p id= alturaInfo
    let pAlturaInfo = document.querySelector('#alturaInfo')
// p id= imcInfo
    let pImcInfo = document.querySelector('#imcInfo')


    divPeso.innerHTML = `<h3>${peso}</h3>`
    divAltura.innerHTML = `<h3>${altura}</h3>`
// -----------------------------------------------

    pPesoInfo.innerHTML = `Peso: ${peso}`

    pAlturaInfo.innerHTML = `Altura: ${altura}`

    pImcInfo.innerHTML = `IMC: ${imc}`
