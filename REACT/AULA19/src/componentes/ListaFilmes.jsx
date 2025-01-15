import CardFilme from "./CardFilme";
/* ### Componente `ListaFilme.js`
/ O componente `ListaFilme` será responsável por renderizar uma lista de filmes. Ele receberá um **array de objetos** como prop, onde cada objeto representará um filme. Utilizando um loop, o componente iterará pelo array para criar dinamicamente múltiplos componentes `CardFilme`, garantindo uma exibição organizada da lista de filmes.*/
function ListaFilmes(props) {
    let filmes = props.filmes // [{...}, {...}, {...}]
    /* 
    {
        id:'idFilme',
        nome:'nomeFilme',
        imagem:'imagemFilme',
        sinopse:'linkFilme',
        assistir:'link2Filme'
    }
    */
    return (
        <div>
            {filmes.map((filme)=>{
                return ( 
                    <CardFilme 
                        key={filme.id} 
                        id={filme.id}
                        imagem={filme.imagem} 
                        titulo={filme.titulo} 
                        sinopse={filme.sinopse} 
                        assistir={filme.assistir}
                    />
                )               
            })}
        </div>
    )
}

export default ListaFilmes