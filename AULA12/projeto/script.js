//SELEÇÃO DOS ELEMENTOS QUE SERÃO MANIPULADOS
// selecionar os parágrafos de pontuação
let pontosComputador = document.getElementById('pontosComputador')
let pontosUsuario = document.getElementById('pontosUsuario')

// selecionar os botões do pedra papel e tesoura
let pedra = document.getElementsByTagName('button')[0]
let papel = document.getElementsByTagName('button')[1]
let tesoura = document.getElementsByTagName('button')[2]

// selecionar os elementos que mostrarão as escolhas com texto e imagem PARA O COMPUTADOR E PARA O USUARIO
let escolhaComputador = document.getElementById('escolhaC')
let escolhaUsuario = document.getElementById('escolhaU')

// selecionar o resultado
let resultado = document.getElementById('resultado')
//--------------------------------------------------------

const opcoes= {
    1: {
        nome: 'pedra',
        imagem: 'img/pedra.png',
        pedra : 'EMPATE',
        papel : 'PERDEU',
        tesoura : 'GANHOU'
    },
    2:{},
    3:{}
}