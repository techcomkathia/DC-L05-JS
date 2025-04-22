const CategoriasServices = require('../services/CategoriasServices')

const getCategorias = (req, res) => CategoriasServices.getCategorias(req, res)


module.exports = {
    getCategorias
}