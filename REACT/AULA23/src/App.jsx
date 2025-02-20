import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './rotas/Rotas'
import BarraNavegacao from './componentes/BarraNavegacao'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* todos os elementos que se repetem em todas as páginas */}
        <BarraNavegacao/>
        <h1>Aula 23</h1>
        <Rotas/>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
