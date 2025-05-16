function dizerOla(turno){
    if(turno == 'manhã'){
        return('Bom dia')
    }
    else if(turno == 'tarde'){
        return('Boa tarde')
    }
    else if(turno == 'noite'){
        return('Boa noite')
    }
}

//criação do teste
test('Validação dos retornos da função dizerOla', () => {
    expect(dizerOla('manhã')).toBe('Bom dia')
    expect(dizerOla('tarde')).toBe('Boa tarde')
    expect(dizerOla('noite')).toBe('Boa noite')
    // expect que retorna um erro caso a condição seja falsa
    expect(dizerOla('noite')).not.toBe('Bom dia')
})