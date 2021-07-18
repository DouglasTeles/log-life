const express = require('express')
const router = express.Router()


//Users
const ClienteController = require('./app/controllers/ClienteController')
router.post('/cadastro',ClienteController.store) //Cadastrar um cliente
router.get('/clientes',ClienteController.index) //LISTA DE CLIENTES
router.put('/cliente/:id/update',ClienteController.update)//Atualiza um Cliente
router.delete('/cliente/:id/delete', ClienteController.delete)//Deleta um cliente


module.exports = router