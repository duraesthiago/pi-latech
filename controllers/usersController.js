const {validationResult} = require('express-validator');


const UserController = {
    // showUser: (req, res) => {res.send('hi, little Padawan')},

    showUser: (req, res) => {res.render('usersDetail')},


    userLogin: (req, res) => {res.render('userLogin')},
    
    userRegistration: (req, res) => {
        const resultValidations = validationResult(req); 
        if(resultValidations.errors.length >0){
            return res.render('userLogin', {
                errors: resultValidations.mapped()
            })
        }},

    processRegister: (req, res) => {res.send('iniciando registro Padawan está')}

}

module.exports = UserController;