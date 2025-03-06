import { createContext } from "react";
import { useState } from "react";


export const PessoasContext = createContext()

export default function PessoasProvider({children}){

    let [pessoas, setPessoas] = useState([
        {id:1, nome: 'João', idade: 20},
        {id:2, nome: 'Maria', idade: 16},
    ])

    let teste = 'sou um teste de variavel'

    return(

        <PessoasContext.Provider value={{pessoas, setPessoas, teste}}>
            {children}
        </PessoasContext.Provider>
    )

}