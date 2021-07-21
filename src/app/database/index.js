const Sequelize = require('sequelize')

const Cliente = require('../models/Cliente')
const User = require('../models/User')

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig);

Cliente.init(connection)
User.init(connection)

module.exports = connection
