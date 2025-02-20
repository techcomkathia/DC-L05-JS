import { Route, Routes } from "react-router-dom";

import Cadastrar from "../paginas/Cadastrar";
import Carrinho from "../paginas/Carrinho";
import Home from "../paginas/Home";


function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cadastrar' element={<Cadastrar/>}/>
            <Route path='/carrinho' element={<Carrinho/>}/>
        </Routes>
    )
}

export default Rotas