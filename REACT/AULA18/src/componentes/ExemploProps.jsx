/*function ExemploProps(props) {
    return(
        <>
         <p>sou a propriedade texto :  {props.texto}</p>
         <p>sou a propriedade numero :  {props.numero}</p>
         <p>sou a propriedade cor:  {props.cor}</p>
        </>
    )

}*/

import './ExemploProps.css'

function ExemploProps({texto, numero, cor}) {
    return(
        <>
         <p>sou a propriedade texto :  {texto}</p>
         <p>sou a propriedade numero :  {numero}</p>
         <p>sou a propriedade cor:  {cor}</p>
        </>
    )

}

export default ExemploProps