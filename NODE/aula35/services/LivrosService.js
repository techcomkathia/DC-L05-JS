const express = require('express')
const app = express()
const LivrosModel = require('../models/LivrosModel')

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json

function getLivros(req, res){
    //buscar todos os livros

    LivrosModel.findAll()
        .then(livros => {
            res.status(200).json({
                status: 200,
                dados: livros
            })
        })
        .catch(erro => {
            res.json({
                status: 500,
                message: erro
            })
        })
}

module.exports = {
    getLivros
}