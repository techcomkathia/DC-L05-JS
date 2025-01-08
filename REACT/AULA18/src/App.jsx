import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuPrimeiroComponente from './componentes/MeuPrimeiroComponente'
import { Botoes } from './componentes/MeuPrimeiroComponente'
import Card from './componentes/Card'
import ExemploProps from './componentes/ExemploProps'
import ListaCards from './componentes/ListaCards'
import {soma} from './componentes/MeuPrimeiroComponente'
import { Person } from './componentes/Card'

let objetos = [
  {nome: 'Vite', idade: 5, email: 'vite@email', img: ''},
  {nome: 'React', idade: 10, email: 'react@email', img: ''},  
  {nome: 'Angular', idade: 15, email: 'angular@email', img: ''},
  {nome: 'Vue', idade: 20, email: 'vue@email', img: ''},
  {nome: 'Svelte', idade: 25, email: 'svelte@email', img: ''}
]

function App() {
  const [count, setCount] = useState(0)

  const [x, setX] = useState(0)



  return (
    <>
      <ExemploProps 
      texto = 'cleitinho' 
      numero='10' 
      cor='vermelho'
      outra='2025'/>

     <Card nome='Vite' idade='5' email='vite@email' img= {viteLogo}/>

     <Card nome='React' idade='10' email='react@email' img= {reactLogo}/>

     <Person name='Káthia' idade='18'></Person>

     <h1>Renderização de listas com props</h1>

     <ListaCards arrayObjetos={objetos}/>



      <h2>{soma()}</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <h1>{x}</h1>

        <button onClick={()=> setX(x + 1)}>clique e adicione mais 1 em x</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

  
  )
}

export default App
