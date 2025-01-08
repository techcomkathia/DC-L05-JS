// renderização de uma lista de cards recebendo um array de objetos
import Card from "./Card";


function ListaCards({arrayObjetos}) {

    return (
        <div>
            {arrayObjetos.map((obj)=>
                <Card nome={obj.nome} idade={obj.idade} email={obj.email} img={obj.img}/>
            )}            
        </div>
    )

}

export default ListaCards