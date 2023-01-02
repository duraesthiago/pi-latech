
const path = require('path');
const { check } = require('express-validator');


const validationsSignUp = [
    check('name')
        .notEmpty().withMessage('É necessário digitar seu nome ').bail()
        .trim(),
    check('last_name')
        .notEmpty().withMessage('É necessário digitar seu sobrenome').bail()
        .trim(),
    check('email')
        .notEmpty().withMessage('É necessário digitar um email').bail()
        .isEmail().withMessage('Esse não é um email válido'),
    check('phone_number')
        .notEmpty().withMessage('É necessário digitar seu telefone com ddd').bail()
        .trim(),
        check('personal_id')
        .notEmpty().withMessage('É necessário o numero do seu CPF').bail()
        .isLength({max: 14}).withMessage('Digite apenas os números').bail()
        .trim(),
    check('password')
        .notEmpty().withMessage('É necessário digitar uma senha').bail()
        .isLength({min: 6}).withMessage('A senha precisa ter no mínimo 6 caracteres').bail()
        .trim(),
        check('avatar').custom((value, {req}) => { 
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif']
    
            if(!file){
                throw new Error('Você precisa escolher um arquivo');
            } else {
                let fileExtension =  path.extname(file.originalname);
                
                if(!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Os arquivos podem ter as extensões ${acceptedExtensions.join(', ')}`);
                }
            }
            return true;
    })
];
   

module.exports = validationsSignUp;