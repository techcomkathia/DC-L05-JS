// dentro de .src criar uma pasta chamada componentes
// dentro dela criar um arquivo chamado Card.jsx
// Card.css para estilização com classes de css
// dentro do arquivo Card.jsx criar uma função chamada Card
// o retorno dessa função sera uma div com uma imagem e um paragrafo
// exportar essa função e usar dentro do App.jsx

import './Card.css'
import gato from '../assets/gato.jpg'
import { useState } from 'react'
function Card() {


    let [x, setx] = useState(20)


    return(
       
        <>
            <img src={gato} className='imagem' alt='gatinho desenho'/>
            <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sapiente consequatur! </p>

            <h1>{x}</h1>
            <button onClick={()=> setx(x + 1)}>Clique aqui para adicionar 1</button>
        

        </>
    )
}


export default Card
