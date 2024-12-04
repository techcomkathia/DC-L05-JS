const quadro = document.querySelector('.quadro');
const botaoVermelho = document.querySelector('.vermelha');
const botaoVerde = document.querySelector('.verde');
const botaoAzul = document.querySelector('.azul');

// Função para alterar a cor de fundo do quadro
function alterarCor(cor) {
    quadro.style.backgroundColor = cor;
}

// Adiciona eventos de clique aos botões
botaoVermelho.addEventListener('click', () => alterarCor('red'));
botaoVerde.addEventListener('click', () => alterarCor('green'));
botaoAzul.addEventListener('click', () => alterarCor('blue'));

quadro.addEventListener('mouseover', ()=>alert('eventos em cascata'))
quadro.addEventListener('mouseover', apagar)



function apagar(){
    quadro.innerHTML = ''
    quadro.style.backgroundColor ='pink'
}
