let imagemLampada = document.querySelector('img')
const btnQuebrarLampada = document.querySelector('#btnQuebrarLampada')
const btnTrocarLampada = document.getElementById('btnTrocarLampada')
const btnLigarLampada = document.getElementById('btnLigarLampada')
const btnDesligarLampada = document.getElementById('btnDesligarLampada')

function quebrarLampada() {
    imagemLampada.src= 'quebrada.jpg'
    imagemLampada.alt = 'lampada quebrada'
}

function trocarLampada() {
    imagemLampada.src= 'desligada.jpg'
    imagemLampada.alt = 'lampada trocada e desligada'
}

function ligarLampada() {
    // caso o alt seja igual a lampada quebrada, mostre um alert dizendo que precisa trocar a lampada
    if(imagemLampada.alt == 'lampada quebrada') {
        alert('Precisa trocar a lampada')
        return
    }

    // caso contrário:
    imagemLampada.src= 'acesa.jpg'
    imagemLampada.alt = 'lampada ligada'
}

function desligarLampada() {
    imagemLampada.src= 'desligada.jpg'
    imagemLampada.alt = 'lampada desligada'
}
// dois parâmetros: nome do evento e nome da função
btnTrocarLampada.addEventListener('click', trocarLampada)

imagemLampada.addEventListener('mouseover', desligarLampada)

