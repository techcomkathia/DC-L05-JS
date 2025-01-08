/* <div class="card" style="width: 18rem;">
<img src="url imagem" class="card-img-top" alt="nome produto">
<div class="card-body">
  <h5 class="card-title">Nome produto</h5>
  <p class="card-text">descrição</p>
  <p class="card-text">Preço</p>
  <a href="#" class="btn btn-primary">Comprar</a>
</div>
</div> */


let url = 'https://fakestoreapi.com/products/1'
let divProduto = document.getElementById('produto')

function mostrarProduto() {

    fetch('https://fakestoreapi.com/products/1')//promise
    .then((resposta) => resposta.json()) // conversão de json para objeto
    .then((objeto)=>{ 
        console.log(objeto) 
        return objeto     
    })
    .then((objeto) => {
        divProduto.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${objeto.image}" class="card-img-top" alt="${objeto.title}">
            <div class="card-body">
            <h5 class="card-title">${objeto.title}</h5>
            <p class="card-text">${objeto.description}</p>
            <p class="card-text">${objeto.price}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>`
    })
    .catch((erro) => console.log('deu ruim'))
}

mostrarProduto()


// faça uma alteração na função para buscar todos os produtos e renderizar na tela os 5 primeiros produtos do array.