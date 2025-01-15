import { useState } from 'react'
import './App.css'
import CardFilme from './componentes/CardFilme'
import ListaFilmes from './componentes/ListaFilmes'
import filmes from './componentes/filmes'
import Formulario from './componentes/Formulario'
import FormularioUsuario from './componentes/FormularioUsuario'

function App() {
  const [count, setCount] = useState(0) // retorna um array com 2 elementos

  let num = 0

  function adicionar1(){
    num++
    console.log(num)
  }


 
  // crie um array de filmes (listados no arquivo links.txt) com as seguintes propriedades:
  // id
  // imagem
  // titulo
  // sinopse
  // assistir

  // passe esse array para o componente `ListaFilmes`

  return (
    <>
      <h1>Aula 19 - React</h1>
      <ListaFilmes filmes={filmes} />       
      {/* <h2>{num}</h2> */}

      {/* <button onClick={adicionar1}>Clique e adicione 1</button>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Clique e adicione 1</button> */}

      {/* <Formulario/> */}

      <FormularioUsuario />

    </>
  )
}

export default App
