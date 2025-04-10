const sequelize = require('./Banco')

//importando os modelos para sincronizar com o banco (criação ou atualização dos campos)
const Fornecedor = require('./modelos/FornecedorModel')
const Produto = require('./modelos/ProdutosModel')

sequelize.authenticate()// met. assíncrono que realiza a conexão com o banco
    .then(() => {
        console.log('sucesso ao conectar ao banco')  
    })
    .then(() => {
        sequelize.sync()
        //sequelize.sync({force: true}) // para apagar e recriar as tabelas
        //sequelize.sync({alter: true}) // para alterar as tabelas caso seja necessário
        console.log('Tabelas sincronizadas com sucesso')
    })
    .catch(err => console.log('Não foi possível conectar ao banco', err)) 