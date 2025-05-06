const LivrosServices = require('../services/LivrosServices')

function getLivros(req, res) {
    LivrosServices.getLivros(req, res)
}

function postLivro(req, res) {
    LivrosServices.postLivro(req, res)
}

function deleteLivro(req, res) {
    LivrosServices.deleteLivro(req, res)
}

function putLivro(req, res) {
    LivrosServices.putLivro(req, res)
}

module.exports = {getLivros, postLivro}


