import { useState } from "react";
import { createContext } from "react";

let lista = [
    {id:1, show: 'show 1', data:'12/12/12'},
    {id:2, show: 'show 2', data:'13/12/12'},
    {id:3, show: 'show 3', data:'14/12/12'}
]

// criação do contexto e export do contexto
export const ShowsContexto = createContext()

// criação do componente ShowsProvedorContexto que retorna o JSX  responsável por passar o contexto aos elementos filhos da aplicação

function ShowsProvedorContexto({children}) {
    let [shows, setShows] = useState(lista)
    return(
        <ShowsContexto.Provider value={{shows, setShows}}>
            {children}
        </ShowsContexto.Provider>
    )
}

export default ShowsProvedorContexto