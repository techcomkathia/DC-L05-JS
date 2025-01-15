// ### Componente `CardFilme.jsx`
// O componente `CardFilme` será responsável por exibir as informações de um filme, incluindo: 
// - Uma **imagem** do filme;
// - O **título** do filme;
// - Dois **links** relacionados.

// https://getbootstrap.com/docs/5.2/components/card/


function CardFilme({ id, imagem, titulo, sinopse, assistir }) {


    return(

        <div className="card" style={{width: '18rem'}} id={id}>
            <img src={imagem} className="card-img-top" alt={titulo}/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                
                <a href={sinopse} className="btn btn-primary">Resumo Filme </a>
                <a href={assistir} className="btn btn-primary">Assistir Aqui</a>
            </div>
        </div>

    )
}

export default CardFilme