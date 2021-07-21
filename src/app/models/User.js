const Sequelize = require('sequelize')

class User extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                email: Sequelize.TEXT,
                password: Sequelize.STRING
            },{
                sequelize
            }
        
        )

    sequelize
    }
}
module.exports = User