const {validationResult} = require('express-validator');


const UserController = {
    // showUser: (req, res) => {res.send('hi, little Padawan')},

    showUserAccount: (req, res) => {res.render('usersAccount')},


    userLogin: (req, res) => {res.render('userLogin')},
    
    // userLoggingIn: (req, res) => {
    //     const resultValidations = validationResult(req); 
    //     if(resultValidations.errors.length >0){
    //         return res.render('userLogin', {
    //             errors: resultValidations.mapped()
    //         });
    //     }else{
    //         res.send('Bem vindo de volta');
    //     }},

    signingUp: (req, res) => {res.render('userSignUp')}

}

module.exports = UserController;