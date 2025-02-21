import { Route, Routes } from "react-router-dom";
import ShowsProvedorContexto from "../contexto/ShowsProvedorContexto";

import Cadastrar from "../paginas/Cadastrar";
import Carrinho from "../paginas/Carrinho";
import Home from "../paginas/Home";


function Rotas(){

    return(

        <ShowsProvedorContexto>
        <Routes>
          
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastrar' element={<Cadastrar/>}/> 
                <Route path='/carrinho' element={<Carrinho/>}/>
               
        </Routes>
        </ShowsProvedorContexto>
    )
}

export default Rotas