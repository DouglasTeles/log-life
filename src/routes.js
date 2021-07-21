const express = require('express')
const router = express.Router()


//Client
const ClienteController = require('./app/controllers/ClienteController')
router.post('/cadastro',ClienteController.store) //Cadastrar um cliente
router.get('/clientes',ClienteController.index) //Visualizar Clientes
router.get('/clientes/:id',ClienteController.index) //Um cliente Clientes
router.put('/cliente/:id/update',ClienteController.update)//Atualizar  Cliente
router.delete('/cliente/:id/delete', ClienteController.delete)//Deletar cliente


module.exports = router