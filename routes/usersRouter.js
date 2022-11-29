const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const validations = require('../middlewares/signUpValidationMiddleware');


/* GET users listing. */
router.get('/', UserController.signUp); 
router.get('/account', UserController.showUserAccount);
router.get('/login', UserController.userLogin);
router.get('/logout', UserController.logout);

// router.post('/', UserController.loginValidation)

router.post('/', validations, UserController.signUpValidation);
router.post('/login', UserController.doingLogin);
  

module.exports = router;
