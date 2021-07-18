const {Model, DataTypes} = require('sequelize')

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            tipocliente:DataTypes.TEXT,
            situacaocliente: DataTypes.TEXT,
            nomecliente: DataTypes.TEXT,
            razaosobrenome: DataTypes.TEXT,
            cnpjcpf: DataTypes.TEXT,
            email:DataTypes.TEXT,
            telefone: DataTypes.TEXT,
            cep: DataTypes.TEXT,
            rua: DataTypes.TEXT,
            numero: DataTypes.TEXT,
            cidade: DataTypes.TEXT,
            estado: DataTypes.TEXT,
            diahoraatt: DataTypes.DATE,
            veiculoutilizado: DataTypes.TEXT,

        },{
            sequelize
        })        
    }
    }
module.exports = Cliente