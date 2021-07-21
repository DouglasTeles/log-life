const User = require("../models/User")
const bcrypt = require("../helpers/bcrypt")
const jwt = require("../helpers/jwt")

module.exports = {

    async create(req, res) {
        console.log(req.user)
        const bodyData = req.body
        const {email, password} = bodyData

        try {
            const verifyUser = await User.findOne({ where: { email: email } })
        if(!verifyUser){
            return res.status(404).json({message:"Usuário inválido!"})
        }

        const passwordDTO = {
            reqPass : password,
            resPass : verifyUser.password
        }


        const validPassword = await bcrypt.decryptPassword(passwordDTO)
        if(!validPassword){
            return res.status(200).json({message:"Senha inválida"})
        }

        const payload = {
            email:verifyUser.email,
            _id:verifyUser.id
        }
        const token = jwt.createToken(payload);
        return res.status(200).json({ message: "Logged in", token });
  
      } catch (error) {
        console.error(error);
        return res.status(400).json(error);
      }

    }

}