const fs = require('fs')

// crie uma função que receba um objeto de endereço com as seguintes propriedades
// rua
// numero
// cidade
// estado
// cep
// e escreva esse objeto com suas chaves e valores em um texto corrido dentro de um arquivo txt

function escreverArquivo(arquivo, objeto) {

    let texto = `Rua: ${objeto.rua} \nNumero: ${objeto.numero} \nCidade: ${objeto.cidade} \nEstado: ${objeto.estado} \nCEP: ${objeto.cep} \n`

    fs.writeFileSync(arquivo, texto)
    console.log('O texto passado foi escrito no arquivo. O conteúdo antigo foi sobrescrito')
}

function adicionarConteudoArquivo(arquivo, texto) { 
    fs.appendFileSync(arquivo, texto)
}

let objeto1 = {
    rua: 'Rua 1',
    numero: 100,
    cidade: 'Cidade 1',
    estado: 'Estado 1',
    cep: '12345-678'
}


let objeto2 = {
    rua: 'Rua 2',
    numero: 200,
    cidade: 'Cidade 2',
    estado: 'Estado 2',
    cep: '2222222'
}

//escreverArquivo('texto2.txt', objeto2)

// adicionarConteudoArquivo('texto.txt', 'concatenado ao texto anterior \n')

// leitura de conteúdo um arquivo
function lerExibirConteudoArquivo(arquivo) {
    let conteudoArquivoTexto = fs.readFileSync('meuTextinho.txt', 'utf-8')

    console.log(conteudoArquivoTexto)
}


// fs.writeFileSync() -> cria um arquivo novo ou sobrescreve o conteúdo de um arquivo existente
// fs.appendFileSync() -> adiciona um texto ao final de um arquivo existente
// fs.readFileSync() -> leitura de um arquivo e retorna o seu conteúdo


// crie um arquivo de texto, escreva algo nele e leia o conteúdo dele
// verifique se existe um ponto e virgula  (;) no texto
//textoDoArquivo.includes()

function verificarConteudoArquivo(arquivo, texto) {
    let conteudoArquivoTexto = fs.readFileSync(arquivo, 'utf-8')

    if (conteudoArquivoTexto.includes(texto)) {
        console.log(`O texto ${texto} foi encontrado no arquivo`)
    } else {
        console.log(`O texto ${texto} não foi encontrado no arquivo`)
    }
}


verificarConteudoArquivo('meuTextinho.txt', ';')

verificarConteudoArquivo('meuTextinho.txt', '!')

