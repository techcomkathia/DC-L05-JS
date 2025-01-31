import { useState } from 'react'
import { useEffect} from 'react'
import BuscarProduto from './componentes/BuscarProduto'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  function adicionar1(){
    setCount(count + 1)
    console.log('a página foi renderizada novamente')
  }
  function chamarApi(){
    console.log('feito um get na api')
  }
  // crie uma função para chamar a api e mostrar no console o produto 1. Essa função só será executada no primeiro render da página
 
  function buscarProduto(){
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(erro=>console.log(erro.message))
  }

  //1º  seja executada apenas na primeira vez que a página for renderizada
  //useEffect(chamarApi,[])
  useEffect(buscarProduto,[])

  //2º  executar a api a cada alteração de estado de uma variável
  //useEffect(chamarApi,[btn])



  //3º (não recomendado) executar a cada renderização da página
  //useEffect(chamarApi)

  // crie uma função que mostra as seguintes informações do produto 5: nome, preço e categoria. As informações serão mostradas em um alert. Essa função deverá ser executada toda vez que o botão (btn) for clicado

  function mostrarInfos(){
    fetch('https://fakestoreapi.com/products/5')
      .then(resposta => resposta.json()) //converter json para objeto
      .then(objeto => {
        alert(`O prouto nº ${objeto.id} se chama ${objeto.title} e custa $ ${objeto.price} e pertence a categoria ${objeto.category}`)
      })
      .catch(erro => console.log(erro.message))
  }

  // uso do hook useEffect com o btn no array de depencias 
  const [btn, setBtn] = useState(0)

  useEffect(mostrarInfos,[btn])



  


  return (
    <>

      <h1>Aula 20</h1>
      <div className="card">
        <button onClick={adicionar1}>
          count is {count}
        </button> 

        <button onClick={()=> setBtn(btn + 1)}>Clique aqui para exibir informações do produto 5</button>  

        <BuscarProduto/>     
      </div>

      
    </>
  )
}

export default App
