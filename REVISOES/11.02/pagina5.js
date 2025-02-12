let novoProduto = {
    nome: 'Notebook',
    preco: 3000.00,
    descricao: 'Notebook com 16GB de RAM e 500GB de SSD'
}



// criando os 3 elementos filhos
// 1º
let h5 = document.createElement('h5')
h5.classList.add('card-title')
// inserir o conteudo do h5
h5.innerText = novoProduto.nome

// 2º
let h6 = document.createElement('h6')
h6.classList.add('card-subtitle', 'mb-2', 'text-muted')
//ou h6.classList = 'card-subtitle mb-2 text-muted'
// inserir o conteudo do h6
h6.innerText = novoProduto.preco

// 3º
let p = document.createElement('p')
p.classList.add('card-text')
// inserir o conteudo do p
p.innerText = novoProduto.descricao


// criar o elemento pai (div com a classe card-body)
let divCardBody = document.createElement('div')
divCardBody.classList.add('card-body')

// adicionar os filhos ao pai
divCardBody.appendChild(h5)
divCardBody.appendChild(h6)
divCardBody.appendChild(p)

// criar o elemento pai da divCardBody (div com a classe card)

let divCard = document.createElement('div')
divCard.classList.add('card')
divCard.style.width = '18rem'

// adicionar conteúdo : inserir o filho divCardBody ao pai divCard

divCard.appendChild(divCardBody)

// selecionar a div pai de todos os produtos e adicionar o filho divCard
let divTodosProdutos = document.getElementById('produto')
divTodosProdutos.appendChild(divCard)