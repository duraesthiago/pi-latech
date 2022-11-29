const path = require('path');
const { check } = require('express-validator');


const validations = [
    check('name')
        .notEmpty().withMessage('É necessário digitar seu nome completo').bail()
        .trim(),
    check('email')
        .notEmpty().withMessage('É necessário digitar um email').bail()
        .isEmail().withMessage('Esse não é um email válido'),
    check('password')
        .notEmpty().withMessage('É necessário digitar uma senha').bail()
        .isLength({min: 12}).withMessage('A senha precisa ter no mínimo 12 caracteres').bail()
        .trim(),
    check('passwordConfirm')
        .notEmpty().withMessage('É necessário confirmar a sua senha').bail()
        .isLength({min: 12}).withMessage('A senha precisa ter no mínimo 12 caracteres').bail()
        .trim(),
]
module.exports = validations;