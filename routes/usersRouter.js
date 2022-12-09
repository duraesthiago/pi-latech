

const express = require('express');
const { signUpValidation } = require('../controllers/UserController');
const router = express.Router();
const UserController = require('../controllers/UserController');
const User = require('../database/models/User');
const validations = require('../middlewares/signUpMiddleware');


/* GET users listing. */
router.get('/', UserController.signUp);
router.get('/account', UserController.showUserAccount);
router.get('/signup', UserController.signUp);

//router.post('/login', UserController.doingLogin);
//router.post('/login', UserController.doingLogin);


module.exports = router;
















