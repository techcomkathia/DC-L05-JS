// o componente terá uma imagem e dois botões
// ao clicar no botão a imagem deve ser trocada. (ex. btn gato e btn cachorro)

import gato from '../assets/gato.jpg'
import cachorro from '../assets/cachorro.png'
import { useState } from 'react'


function CardComBtn() {
    // a função useState vai armazenar o src da imagem passado como parametro e retornar um array que tem como primeiro elemento o src(variável)segundo o setSrc (função)
    let [Src, setSrc] = useState(gato)
    let [Alt, setAlt] = useState('Gato imagem')

    function troca(local,texto) {
        setSrc(local)
        setAlt(texto)
    }

    return (
        <>
            <img src={Src} alt={Alt} />
            <button onClick={()=>troca(gato,'gato')}>Gato</button>
            <button onClick={()=>troca(cachorro,'cachorro')}>Cachorro</button>
        </>
    )

}

export default CardComBtn