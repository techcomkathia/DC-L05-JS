import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuNome from './componentes/MeuNome'
import Card from './componentes/Card'
import CardComBtn from './componentes/CardComBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card/>


      {/* <MeuNome />       */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MeuNome/>
      <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <CardComBtn/>

    </div>
  )
}

export default App
