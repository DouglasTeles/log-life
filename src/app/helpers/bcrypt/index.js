const bcrypt = require('bcryptjs');

module.exports ={

    async encryptedpassword(password){

        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)

        return encryptedPassword
    },

    async decryptPassword(passwords){
        
        const {reqPass, resPass} = passwords

        const isValid = await bcrypt.compare(reqPass, resPass)

        return isValid
    }


}