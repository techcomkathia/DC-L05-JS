import {Routes, Route} from 'react-router-dom'

import Home from '../paginas/Home'
import SobreNos from '../paginas/SobreNos'
import Contato from '../paginas/Contato'
import Pagina2 from '../paginas/Pagina2'
import PaginaNaoEncontrada from '../paginas/PaginaNaoEncontrada'

function Rotas(){

    return(
        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/sobrenos' element={<SobreNos/>}/>
            <Route path='/pagina2' element={<Pagina2/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='*' element={<PaginaNaoEncontrada/>}/>
        </Routes>
    )

}

export default Rotas