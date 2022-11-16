const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const UsersController = require('../controllers/UsersController');

const validations = [
    check('name').notEmpty().withMessage('É necessário digitar um nome'),
    check('email').notEmpty().withMessage('É necessário digitar um email'),
    check('psw').notEmpty().withMessage('É necessário digitar a sua senha'),
]

/* GET users listing. */
router.get('/', UsersController.userLogin); 
router.get('/users/minhaconta', UsersController.showUserAccount);
router.get('/users/cadastro', UsersController.signingUp);

// router.post('/', validations, UsersController.processRegister)
  
// router.post('/', userController);

module.exports = router;
