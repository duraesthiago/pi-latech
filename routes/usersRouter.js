const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const validationsSignUp = require('../middlewares/validationsSignUpMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const userNotLoggedMiddleware = require('../middlewares/userNotLoggedMiddleware');

/* GET users listing. */
router.get('/', userLoggedMiddleware, UserController.signUp);
router.post('/', validationsSignUp, UserController.signUpValidation)
router.post('/create', UserController.createUser);

router.get('/login', userLoggedMiddleware, UserController.userLogin);
router.post('/login', UserController.loginProcess);

router.get('/account', userNotLoggedMiddleware, UserController.showUserAccount);
router.post('/account', uploadFile, UserController.editProfileAvatar);
router.get('/recoverPassword', UserController.recoverPassword);


router.get('/logout', userNotLoggedMiddleware, UserController.logout);


module.exports = router;








