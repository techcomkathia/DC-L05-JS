const LivrosController = require('../controller/LivrosController')

const express = require('express')
const rotas = express.Router()


rotas.get('/', LivrosController.getLivros)
rotas.post('/', LivrosController.postLivro)
//get de um livro
rotas.delete('/:id', LivrosController.deleteLivro)
rotas.put('/:id', LivrosController.putLivro)
//rotas.get('/:id', LivrosController.getLivro)

module.exports = rotas