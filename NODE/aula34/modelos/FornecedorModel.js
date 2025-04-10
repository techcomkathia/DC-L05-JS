const sequelize = require('./Banco')
const { DataTypes } = require('sequelize')


const Fornecedor = sequelize.define('fornecedores', 
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cnpj:{
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        endereco:{
            type: DataTypes.STRING(200)
        }
    }
)

module.exports = Fornecedor