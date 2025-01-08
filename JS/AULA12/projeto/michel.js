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

// montarJogada(1)

// 4.2 definir o ganhador
function definirGanhador(){
    // avaliar as jogadas , definir o ganhador e adicionar o ponto ao placar

    if(jogadaUsuario[jogadaComputador.nome]== 'GANHOU'){ 
        qtdPontosUsuario+=1

    }
    else if (jogadaUsuario[jogadaComputador.nome]=='PERDEU'){ 
        qtdPontosComputador+=1
    }

}


// 4.3 montar a tela
function montarTela(){

let imagemJogador = document.createElement('img')
let imagemComputador = document.createElement('img')
// alterar as propriedades
imagemJogador.src = jogadaUsuario.imagem
imagemComputador.src = jogadaComputador.imagem
imagemJogador.alt = jogadaUsuario.nome
imagemComputador.alt = jogadaComputador.nome

let textoJogador = document.createElement('p')
let textoComputador = document.createElement('p')

textoJogador.innerHTML = jogadaUsuario.nome
textoComputador.innerHTML = jogadaComputador.nome


// adicionar os elementos na tela (ao pai)
escolhaUsuario.appendChild(textoJogador)
escolhaUsuario.appendChild(imagemJogador)

escolhaComputador.appendChild(textoComputador)
escolhaComputador.appendChild(imagemComputador)

// atualização do campo que mostra o resultado
resultado.innerHTML = jogadaUsuario[jogadaComputador.nome]

// atualização do placar
pontosComputador.innerHTML = qtdPontosComputador
pontosUsuario.innerHTML = qtdPontosUsuario

}

// 4.4 jogar 
function jogar(numeroDaJogadaDoUsuario){
        
    limparTela()
    montarJogada(numeroDaJogadaDoUsuario)
    definirGanhador()
    
    estiloResult()
    montarTela()
    if (qtdPontosComputador == 5)
        { 
            alert('Você Perdeu')
            qtdPontosComputador=0
            qtdPontosUsuario=0
            pontosComputador.innerHTML = qtdPontosUsuario
            .innerHTML = qtdPontosUsuario

           
        }

    else if (qtdPontosUsuario == 5)
        {
            alert('Você Ganhou')
            qtdPontosComputador=0
            qtdPontosUsuario=0
            pontosComputador.innerHTML = qtdPontosComputador
            qtdPontosUsuario.innerHTML = qtdPontosUsuario
            
        }

    
    
}

function limparTela(){
    // resetando pontuação do jogo
    pontosComputador.innerHTML = qtdPontosComputador
    pontosUsuario.innerHTML = qtdPontosUsuario
    escolhaComputador.innerHTML = ''
    escolhaUsuario.innerHTML = ''
    resultado.innerHTML = ''
}

function estiloResult(){
    if(qtdPontosComputador == 5){
        resultado.style.backgroundColor = 'red'
    }
    else if(qtdPontosUsuario == 5){
        resultado.style.backgroundColor = 'green'
    }

} 
        


// 5 - ADICIONANDO EVENTOS AOS BOTOES
pedra.addEventListener('click',()=> jogar(1))
papel.addEventListener('click',()=> jogar(2))
tesoura.addEventListener('click',()=> jogar(3))

