// ### Componente `CardFilme.jsx`
// O componente `CardFilme` será responsável por exibir as informações de um filme, incluindo: 
// - Uma **imagem** do filme;
// - O **título** do filme;
// - Dois **links** relacionados.


function CardFilme({ id, imagem, titulo, sinopse, assistir }) {
    return(
        <div id={id}>
            <img src={imagem} alt={titulo}/>
            <h1>{titulo}</h1>
            <a href={sinopse}>Resumo Filme</a>
            <br/>
            <a href={assistir}>Assistir Aqui</a>
        </div>
    )
}

export default CardFilme