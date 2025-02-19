import {Routes, Route} from 'react-router-dom'
// npm install react-router-dom

// importação das páginas que serão renderizadas
import Home from '../paginas/Home'
import Pagina2 from '../paginas/Pagina2'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'


// configuração das rotas em um componente especifico

function Rotas(){
    return(
        <Routes>
            <Route element={<Home/>}  path='/' />
            <Route element={<Pagina2/>} path='/pagina2'/>
            <Route element={<PaginaNaoEncontrada/>} path='*'></Route>
        </Routes>
    )
}

export default Rotas