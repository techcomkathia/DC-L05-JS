// home , cadastar e carrinho
import Cadastar from '../paginas/Cadastrar'
import Carrinho from '../paginas/Carrinho'
import Home from '../paginas/Home'

import {Link} from 'react-router-dom'



function BarraNavegacao() {
    return (
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/cadastrar">Cadastrar</Link> </li>
                <li> <Link to="/carrinho">Carrinho</Link> </li>
            </ul>
        </nav>
       
    )
}

export default BarraNavegacao