const {validationResult} = require('express-validator');


const UserController = {
    userLogin: (req, res) => {res.render('userLogin')},

    showUserAccount: (req, res) => {res.render('userAccount')},

    signUp: (req, res) => {res.render('userSignUp')},

    loginValidation: (req, res) => {
            const resultValidations = validationResult(req); 
            if(resultValidations.errors.length >0){
                    return res.render('userLogin', {
                            errors: resultValidations.mapped(),
                            oldData: req.body
                        });
                    }
                    }
}

module.exports = UserController;