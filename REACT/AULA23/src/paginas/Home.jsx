import { MeuContexto } from "../contexto/MeuProvedorContexto"
import { useContext } from "react"
function Home (){

    let {informacoes} = useContext(MeuContexto)
    console.log(informacoes)
    return (
        <div>
            <h1>Home</h1>
            <p>{informacoes[0].informacoes}</p>           

            
        </div>
    )
}

export default Home