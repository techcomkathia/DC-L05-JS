const CategoriasServices = require('../services/CategoriasServices')

function getCategorias(req, resp) {
    CategoriasServices.getCategorias(req, resp)
}

module.exports = {
    getCategorias
}