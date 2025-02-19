function ComponenteCor({cor}) {

    let estiloComponente = {
        textAlign: 'center',
        border: '2px solid #ffffff',
        borderRadius: '10px',
        backgroundColor: cor
    }

    return (
        <div style={estiloComponente}>
            <h1>Componente com cor dinâmica</h1>
        </div>

    )
}

export default ComponenteCor
