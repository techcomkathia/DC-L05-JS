import Rotas from "./rotas/Rotas"

import {BrowserRouter} from 'react-router-dom'



function ModeloPaginas(){

    return(

        <>
        <BrowserRouter>
            <header style={{backgroundColor: 'darkblue', color: 'white'}}>
                <h6>Cabeçalho</h6>
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