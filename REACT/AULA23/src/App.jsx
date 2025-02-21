import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './rotas/Rotas'
import BarraNavegacao from './componentes/BarraNavegacao'
import MeuProvedorContexto from './contexto/MeuProvedorContexto'
import Home from './paginas/Home'




function App() {

  return (
    <>
      <BrowserRouter>

          <MeuProvedorContexto>
        
            <BarraNavegacao/>
            <h1>Aula 23</h1>
            <Rotas/>
          </MeuProvedorContexto>
          
        
          
      </BrowserRouter>
      
      
    </>
  )
}

export default App
