const express = require('express')
const rotas = express.Router()
//controladores 
const CategoriasController = require('../controller/CategoriasController')

//buscarTodasCategorias
rotas.get('/', CategoriasController.getCategorias)

//exportando as rotas
module.exports = rotas