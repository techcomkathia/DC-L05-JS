//1 - SELEÇÃO DOS ELEMENTOS QUE SERÃO MANIPULADOS
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
// 2 - DEFINIÇÃO DAS REGRAS DO JOGO

const opcoes= {
    1: {
        nome: 'pedra',
        imagem: 'img/pedra.png',
        pedra : 'EMPATE',
        papel : 'PERDEU',
        tesoura : 'GANHOU'
    },
    2:{
        nome: 'papel',
        imagem: 'img/papel.png',
        pedra : 'GANHOU',
        papel : 'EMPATE',
        tesoura : 'PERDEU'
    },
    3:{
        nome: 'tesoura',
        imagem: 'img/tesoura.png',
        pedra : 'PERDEU',
        papel : 'GANHOU',
        tesoura : 'EMPATE'
    }
}

// 3 -  DEFINIÇÃO DAS VARIÁVEIS GLOBAIS QUE SERÃO UTILIZADAS PARA ARMAZENAR AS ESCOLHAS E OS PONTOS DOS JOGADORES

let jogadaComputador = {}
let jogadaUsuario = {}

let qtdPontosComputador = 0
let qtdPontosUsuario = 0

// 4 - DEFINIÇÃO DAS FUNCIONALIDADES DO JOGO

// 4.1 montar as jogadas
function montarJogada(numeroJogador){
    // utilizar a interface Math com o método randon para criar um número entre 1 e 3 para a jogada do computador
    // numero decimal random 
    let numComputador = (Math.random()*3)+1
    // converter o numero decimal para inteiro
    numComputador = Math.floor(numComputador)
    
    jogadaComputador = opcoes[numComputador]
    jogadaUsuario = opcoes[numeroJogador]
}


// 4.2 definir o ganhador
function definirGanhador(){
    // avaliar as jogadas , definir o ganhador e adicionar o ponto ao placar

    if('GANHOU'){

    }
    else if ('PERDEU'){

    }

}


// 4.3 montar a tela

// 4.4 jogar