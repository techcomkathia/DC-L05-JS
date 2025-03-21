const Gato = require('./Gato.js')

let gato1 = new Gato('laranja', 'gordo', 'Cleitinho')
let gato2 = new Gato('preto', 'gordo', 'Sebastião')
/*gato1.derrubarCoisas()
gato2.derrubarCoisas()
gato2.miar()*/

console.log(gato1.cor)
gato1.cor = 'vermelho'
console.log(gato1.cor)

