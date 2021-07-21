const express = require('express')
const router = express.Router()
const authenticate = require('./app/middlewares/auth')


//Users
const UserController = require ('./app/controllers/UserController')
router.post('/novousuario', UserController.store)//Cria usuario
//router.get('/usuarios',authenticate.verifyToken, UserController.index)

//Login
const SessionController = require('./app/controllers/SessionController')
router.post('/login', SessionController.create)//Fazer login

//Client
const ClienteController = require('./app/controllers/ClienteController')
router.post('/cadastro',authenticate.verifyToken,ClienteController.store) //Cadastrar um cliente
router.get('/clientes',authenticate.verifyToken,ClienteController.index) //Listar clientes
router.get('/clientes/:id',authenticate.verifyToken,ClienteController.index) //Listar um cliente
router.put('/cliente/:id/update',authenticate.verifyToken,ClienteController.update)//Atualizar Cliente
router.delete('/cliente/:id/delete',authenticate.verifyToken, ClienteController.delete)//Deletar cliente


module.exports = router