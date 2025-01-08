import reactLogo from '../assets/react.svg'
// import './Card.css'

// estilização do card
//bg cinza claro
//borda branca com 2px solid
//img com 300px e bordas 100% arredondadas (imagem redonda)
//arquivo de css externo para o card

const style={
    card: {
        backgroundColor: 'lightgray',
        border: '2px solid white',
        margin:'10px'
    },

    img:{
        borderRadius: '50%',
        width: '300px'
    }
}

function Card({nome, email, idade, img}) {
    return(
        <div className='card' style={style.card}>
            <img src={img} alt="imagem do meu card" style={style.img} />
            <h1>Nome: {nome}</h1>
            <h3>Email: {email}</h3>
            <h3>idade: {idade}</h3>
        </div>
        
    )
}

function Person(props) {
    let { avatar, name, email, idade } = props
    
    avatar = "https://wallpapers.com/images/featured-full/imagens-de-perfil-do-discord-p2o9voc08wbr2cs9.jpg"
    name = "Claiton"
    email = "GatoCleitonoficial@miuamiua.cat"
    idade = "18"
    
    return (
        <div>   
            <img src={props.avatar} alt={props.name} />
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h2>{props.idade}</h2>
        </div>
    )    
}   

export default Card
export {Person}