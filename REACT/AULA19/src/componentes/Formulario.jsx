import { useState } from "react";

function Formulario() {
    let [nome, setNome] = useState('')

    function enviar(e) {
        e.preventDefault()
        alert(`O nome digitado foi ${nome} e o formulario foi enviado`)

    }

    return(
        <form onSubmit={enviar} >
            <label htmlFor="nome">Nome:</label>
            <input 
                type="text" 
                id="nome" 
                placeholder="Digite seu nome" 
                value={nome} 
                onChange={
                    (e)=> {
                        setNome(e.target.value)
                        console.log(`o valor atual da variável nome é ${nome}`)
                    }
                    /*a cada caracter digitado, ele vai executar essa funcao atualizando a variável nome para receber o valor inteiro do campo que sofreu o evento*/
                }/>
            <button type="submit">Enviar</button>
        </form>
    )
    
}

export default Formulario