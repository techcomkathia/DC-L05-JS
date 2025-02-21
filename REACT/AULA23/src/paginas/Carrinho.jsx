import { useContext } from "react"
import { MeuContexto } from "../contexto/MeuProvedorContexto"

function Carrinho() {

    let{objetos} = useContext(MeuContexto)
    return (
        <div>
            <h1>carrinho</h1>
            <p>{objetos[0].objeto}</p>
        </div>
    )
}

export default Carrinho