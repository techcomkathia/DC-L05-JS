// todas as regras de negócio
// criação de uma categoria, listagem das categorias, edição de uma categoria, exclusão de uma categoria

const CategoriasModel = require('../models/CategoriasModel') // importando o modelo de categorias
const express = require('express')
const app = express()

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json

//criação da função do primeiro serviço

function getCategorias(req, res) {
    CategoriasModel.findAll() //método assíncrono para buscar todas as categorias
        .then(categorias =>{
            res.json({
                status:200,
                dados: categorias
            })
        })
        .catch(erro =>{
            res.json({
                status:500,
                message: erro
            })
        })
}


function postCategorias(req, res) {
    //nome, descricao
    const {nome, descricao} = req.body

    //verificar se a categoria existe
    CategoriasModel.findOne({where:{nome:nome}})
        .then(categoria => {
            if(categoria){
                return res.json({
                    status: 400,
                    message: 'Categoria ja cadastrada'
                })
            }
            else{
               CategoriasModel.create({nome:nome, descricao:descricao})
                .then(categoria => {
                    res.json({
                        status: 200,
                        dados: categoria
                    })
                })

            }
        }).catch(erro => {
            res.json({
                status: 500,
                message: erro
            })
        })
}

async function postCategoria2 (req, res) {
        const{nome, descricao} = req.body // desestruturando o body da requisição
    
    try{

        //verificar se a categoria existe
        const categoriaPesquisa = await CategoriasModel.findOne({where:{nome:nome}})

        if(categoriaPesquisa){
            //se a categoria existir retorna uma mensagem de erro
            return res.json({
                status: 400,
                message: 'Categoria ja cadastrada'
            })
        } 

        //caso o código não tenha sido retornado acima, significa que a categoria ainda nao foi cadastrada
        //entao cria uma nova categoria
        const categoriaCriada= await CategoriasModel.create({nome:nome, descricao:descricao})

        res.json({
            status: 200,
            dadosCriados: categoriaCriada
        })

    }
    catch(erro){}
    
}

module.exports = {
    getCategorias
}