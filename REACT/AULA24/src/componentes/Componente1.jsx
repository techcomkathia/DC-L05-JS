import { useContext } from "react"
import { contexto } from "../contexto/MeuProvedorDeContexto"

function Componente1() {
    // renderiza as informações do objeto na tela em um paragrafo

    let {info, setInfo} = useContext(contexto)

    return (
        <p>
            {info.informacao}
        </p>
    )


}

export default Componente1