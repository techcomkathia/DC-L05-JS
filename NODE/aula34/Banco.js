const Sequelize = require('sequelize') //importando o modulo sequelize

//instancia de um objeto sequelize, que fará a conexão com o banco de dados e executar as operações no banco de dados

const sequelize = new Sequelize('live05aula24', 'root', 'km2015km', {
    host: 'localhost', //local do banco (localhost)
    dialect: 'mysql' // SGBD do banco
})


module.exports = sequelize