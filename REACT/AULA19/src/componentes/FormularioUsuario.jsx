import { useState } from "react";

function FormularioUsuario() {
    let [nome, setNome] = useState('')
    let [email, setEmail] = useState('')
    let [senha, setSenha] = useState('')
    let [img, setImg] = useState('')


    function enviar(e) {
        e.preventDefault()

        let obj = {
            nome: nome,
            email: email,
            senha: senha,
            img: img
        }

        console.log(obj)
        alert('Formulario enviado')

        setNome('')
        setEmail('')
        setSenha('')
        setImg('')
    }

    return (
        <form onSubmit={enviar}>
            <label htmlFor="nome">Nome</label>
            <br />
            <input type="text" name="nome" id="nome" onChange={(e)=> setNome(e.target.value)}/>

            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>

            <br />
            <label htmlFor="senha">Senha</label>
            <br />
            <input type="password" name="senha" id="senha" onChange={(e)=> setSenha(e.target.value)}/>

            <br />
            <label htmlFor="img">Imagem</label>
            <br />
            <input type="url" name="img" id="img" onChange={(e)=> setImg(e.target.value)}/>

            <br />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormularioUsuario

// crie um componente de formulário que terá os seguintes campos:
// - Nome
// - Email
// - Senha
// - imagem (url)

//ao submeter o formulário, os dados devem ser armazenados em um objeto
// e exibir os dados no console