// criem um objeto chamado onibus

//com as seguintes propriedades (chaves)
//portas = 2 
//rodas = 6
//placa = 'KM589K'

let onibus = {
    portas:2 ,
    rodas:6 ,
    placa: 'KM589K'
}


let onibusArray= [2 , 6 , 'KM589K']

console.log(onibus.portas) //2
console.log(onibusArray[0]) //2

//objetos - descrever propriedades, caracteristicas de um único elemento
//arrays - armazenar muitas informações. Diversas informações ligadas a um único sentido
console.log(onibus)

//atualização de uma propriedade
onibus.portas = 3
console.log(onibus)

onibusArray[3] = 'novo valor'

onibus.novaPropriedade = 100


let array1 = []

let obj1 = {}
console.log(obj1)
obj1.chave1 = 1
obj1.chave2 = 2
console.log(obj1)