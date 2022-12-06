const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const path = require('path');
const multer = require('multer');
const { check } = require('express-validator');

const validations = [
    check('name').notEmpty().withMessage('É necessário digitar um nome'),
    check('email')
    .notEmpty().withMessage('É necessário digitar um email').bail()
    .isEmail().withMessage('Esse não é um email válido'),
    check('password')
    .notEmpty().withMessage('É necessário digitar a sua senha').bail()
    .isLength({min: 12}).withMessage('A senha precisa ter no mínimo 12 caracteres'),
]

/* GET users listing. */
//router.get('/', UserController.userLogin); 
//router.get('/account', UserController.showUserAccount);
//router.get('/signup', UserController.signUp);

//router.post('/', validations, UserController.loginValidation)
  

module.exports = router;
