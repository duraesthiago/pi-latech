
const path = require('path');
const { check } = require('express-validator');


const validationsAdminSignUp = [
    check('nameAdmin')
        .notEmpty().withMessage('É necessário digitar seu nome').bail()
        .trim(),
    check('emailAdmin')
        .notEmpty().withMessage('É necessário digitar seu email funcional').bail()
        .isEmail().withMessage('Esse não é um email válido'),
    check('workerAdmin')
        .notEmpty().withMessage('É necessário digitar sua identidade funcional').bail()
        .isLength({min: 6}).withMessage('A identidade funcional tem no mínimo 6 caracteres').bail()
        .trim(),   
    check('passwordAdmin')
        .notEmpty().withMessage('É necessário digitar uma senha').bail()
        .isLength({min: 6}).withMessage('A senha precisa ter no mínimo 6 caracteres').bail()
        .trim(),
   
]
module.exports = validationsAdminSignUp;