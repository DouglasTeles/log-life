const Sequelize = require('sequelize')

const Cliente = require('../models/Cliente')


const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig);

Cliente.init(connection)


module.exports = connection
