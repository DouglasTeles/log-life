const helpers = require('../helpers/bcrypt')
const User = require('../models/User')

class UserController {
    async store(req, res){
        const { email, password} = req.body;
        

        try {
        const encryptedPassword = await helpers.encryptedpassword(password)
        
        const verifyEmail = await User.findOne({ where: { email: email } })
        if(!verifyEmail){
            const newUser = await User.create({ email: email, password: encryptedPassword})

            newUser.password = encryptedPassword

            return res.json(newUser)
        }else{
            return res.json({message:"Email já existe"})
        }
       
        } catch (error) {
        return res.json(400)
        }        
    }
    async index(req, res){
        console.log(req.user)

        const users = await User.findAll()
        return res.json(users)
       
    }
}
module.exports = new UserController