const sequelize = require('./Banco')

sequelize.authenticate()// met. assíncrono que realiza a conexão com o banco
    .then(() => console.log('sucesso ao conectar ao banco'))
    .catch(err => console.log('Não foi possível conectar ao banco', err)) 