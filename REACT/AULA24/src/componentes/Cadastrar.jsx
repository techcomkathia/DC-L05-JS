import { useContext } from "react";
import { PessoasContext } from "../contexto/PessoasProvider";
import { useState } from "react";

function Cadastrar() {
    let {pessoas,setPessoas} = useContext(PessoasContext)

    function cadastrarPessoa(nomeInfo, idadeInfo){ 
        
        let id = pessoas[pessoas.length-1].id + 1
        let objPessoa = {id, nome: nomeInfo, idade: idadeInfo}

        setPessoas([...pessoas, objPessoa])
    }

    let [n, setN] = useState('')
    let [i, setI] = useState('')

    return(
        <>
            <input type="text" placeholder="Nome" onChange={(e) => setN(e.target.value)}></input>
            <input type="number" placeholder="Idade" onChange={(e) => setI(e.target.value)}></input>
            <button onClick={() => cadastrarPessoa(n,i)}>Cadastrar</button>
        </>
    )

}

export default Cadastrar