import { useContext } from "react";
import { PessoasContext } from "../contexto/PessoasProvider";

export default function Listagem() {

    let {pessoas} = useContext(PessoasContext)

    return(
        <>
            <h2>Lista de Pessoas</h2>
            <ul>
                {pessoas.map(
                    (objPessoa) => <li key={objPessoa.id}> Nome: {objPessoa.nome}</li>
                )}
            </ul>
        </>
    )
    
}