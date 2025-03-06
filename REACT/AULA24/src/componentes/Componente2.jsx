import { useContext } from "react"
import { contexto } from "../contexto/meuProvedorDeContexto"

function Componente2() {
    let {info, setInfo} = useContext(contexto)
    console.log(info)
    return(
        <p>
            {info.informacao}
        </p>
    )

}

export default Componente2