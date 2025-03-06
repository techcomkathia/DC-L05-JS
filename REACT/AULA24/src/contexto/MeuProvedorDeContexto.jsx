import { createContext } from "react"; //criação do contexto
import { useState } from "react";


const contexto = createContext()


function MeuProvedorDeContexto({children}) {

    let [info, setInfo] = useState({id:1, informacao: 'informacao 1', data:'12/12/12'})
    // retornar o JSX do componente responsavel pela criação do contexto para os elementos filhos da aplicação

    return(
        <contexto.Provider value={{info, setInfo}}>
            {children}
        </contexto.Provider>
    )
}

export default MeuProvedorDeContexto

export {contexto}