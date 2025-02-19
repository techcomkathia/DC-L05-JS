import Rotas from "./rotas/Rotas"

import {BrowserRouter, Link} from 'react-router-dom'



function ModeloPaginas(){

    return(

        <>
        <BrowserRouter>
            <header style={{backgroundColor: 'darkblue', color: 'white'}}>
                <h6>Cabeçalho</h6>

                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/sobrenos">Sobre Nós</Link></li>
                        <li> <Link to="/pagina2">Pagina 2</Link></li>
                        <li> <Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>

            </header>

            {/* TODAS AS PÁGINAS PRESENTES NO ARQUIVO DE ROTAS */}
            <Rotas/>


            <footer style={{backgroundColor: 'darkblue', color: 'white'}}>
                <h6>Rodapé</h6>
            </footer>

        </BrowserRouter>

        </>

    )

}

export default ModeloPaginas