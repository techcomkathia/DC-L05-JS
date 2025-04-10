const sequelize = require('../Banco')
const { DataTypes } = require('sequelize')
const Fornecedor = require('./FornecedorModel')


const Produto = sequelize.define('produtos', 
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
        preco:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        quantidade:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fornecedor_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Fornecedor,
                key: 'id'
            }
        }
    }
)

//relacionamentos
Fornecedor.hasMany(Produto) // um para muitos
Produto.belongsTo(Fornecedor) // um para um

module.exports = Produto