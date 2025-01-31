import { useState, useEffect } from "react";

function BuscarProduto() {
    const [idProduto, setIdProduto] = useState(1)
    const [produto, setProduto] = useState({})
    const [todosProdutos, setTodosProdutos] = useState([])

    function buscarProduto() {
        fetch(`https://fakestoreapi.com/products/${idProduto}`)
        .then(resposta => resposta.json())
        .then(objeto => setProduto(objeto))
        .catch(erro => console.log(erro.message))
    }

    function exibirProduto() {
        console.log(produto)
    }

    function BuscarTodosProdutos(){
        fetch('https://fakestoreapi.com/products')
        .then(reposta=>reposta.json())
        .then(json=>setTodosProdutos(json))
        .then(console.log('fetch feito na api para todos os produtos'))
        .catch(erro=>console.log(erro.message))
    }

    useEffect(BuscarTodosProdutos, [])

    return(
        <div>
            <form action="">
                <input type="text" value={idProduto} onChange={(e) => setIdProduto(e.target.value)} placeholder="Digite o id do produto"/>
                <button type="button">Buscar</button>
                <button type="button" onClick={exibirProduto}>Exibir todos os produtos</button>
            </form>

            <div>
                {todosProdutos.map((produto, index) => {
                    return(
                        <h1>{produto.title}</h1>
                    )
                })}
            </div>
        </div>
        


    )
}

export default BuscarProduto