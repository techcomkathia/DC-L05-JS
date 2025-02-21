import { createContext } from "react"; //hook para criar o contexto
import { useState } from "react";

//base para a criação de uma variável de estado controlado (useState)
let infos = [
    {id:1, informacao: 'informacao 1'},
    {id:2, informacao: 'informacao 2'}
]
let objs = [
    {id:1, objeto: 'objeto 1'},
    {id:2, objeto: 'objeto 2'}
]

// criar o contexto (Objeto com acesso a métodos para prover informações aos elementos da aplicação)
   
export const MeuContexto = createContext()
function MeuProvedorContexto({children}) {
    let [informacoes, setInformacoes] = useState(infos)
    let [objetos, setObjetos] = useState(objs)

     // retornar o JSX do componente responsavel pela criação do contexto para os elementos filhos da aplicação
    return(
        <MeuContexto.Provider value={{informacoes, setInformacoes, objetos, setObjetos}} >
            {children}
        </MeuContexto.Provider>
    )
}
export default MeuProvedorContexto
