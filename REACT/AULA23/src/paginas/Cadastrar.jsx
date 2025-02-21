import { useContext } from "react"
import { ShowsContexto } from "../contexto/ShowsProvedorContexto"

function Cadastrar() {
    let {shows} = useContext(ShowsContexto)
    return (
        <div>
            <h1>Página de cadastro</h1>
            <p>{shows[0].data}</p>
        </div>
    )
}

export default Cadastrar