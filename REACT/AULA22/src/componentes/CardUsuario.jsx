/* Crie um componente que receba props e renderize as informações:
      -Nome, Idade e Email
      Esse componente deverá ainda receber duas propriedades de estilos personalizadas:
      - cor da borda
      - tamanho da fonte
*/

function CardUsuario({nome, idade, email, corBorda, tamanhoFonte}){
    let css={
        fontSize: tamanhoFonte,
        border: `2px solid ${corBorda}`
    }

    return(
        <div style={css}>
            <h1>Conteúdo Card Usuário</h1>
            <h2>{nome}</h2>
            <h2>{idade}</h2>
            <h2>{email}</h2>
        </div>
    )
}

export default CardUsuario