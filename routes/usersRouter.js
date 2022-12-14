

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const validationsSignUp = require('../middlewares/validationsSignUpMiddleware');


/* GET users listing. */
router.get('/', UserController.signUp);
router.get('/', UserController.signUp); 
router.post('/',validationsSignUp, UserController.signUpValidation)
router.post('/create', UserController.createUser);

router.get('/login', UserController.userLogin);
router.post('/login', UserController.doingLogin);

router.get('/account', UserController.showUserAccount);
router.get('/forgotPassword', UserController.forgotPassword);


//router.get('/logout', UserController.logout);

// router.post('/', UserController.loginValidation)

  
  

module.exports = router;
















