
function MeuPrimeiroComponente() {
    let nome = 'Káthia'
    return (
        <>
            <h1>Meu Primeiro Componente</h1>
            <p>Meu nome é {nome}</p>
            <Botoes />
        </>
    )
}

function Botoes(){

    return(
        <>
            <button>OK</button>
            <button>Cancelar</button>
        </>
    )
    
}

function soma(){
    return 2 + 2
}

// exportação de recursos
export default MeuPrimeiroComponente
export {soma, Botoes}