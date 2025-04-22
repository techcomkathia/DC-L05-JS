const express = require('express')
const rotas = express.Router()
//controladores 
const CategoriaController = require('../controller/CategoriaController')

//buscarTodasCategorias
rotas.get('/', CategoriaController.getCategorias)

//exportando as rotas
module.exports = rotas