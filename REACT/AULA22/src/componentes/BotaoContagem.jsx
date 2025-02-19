import { useState } from "react";

function BotaoContagem() {
    const [variavel, funcaoControleEstadoVariavel] = useState(0)

    // retornar o conteúdo do componente a ser renderizado
 
    return(
        <div>
            <p>{variavel}</p>
            <button onClick={() => funcaoControleEstadoVariavel(variavel + 10)}>Aumentar 10</button>
            <button onClick={() => funcaoControleEstadoVariavel(variavel - 5)}>Diminuir 5</button>
        </div>
    )

}

export default BotaoContagem