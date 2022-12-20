const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

const validationsSignUp = require('../middlewares/validationsSignUpMiddleware');
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware');
const avatarValidation = require('../middlewares/accountAvatarMiddleware');
const uploadFile = require('../middlewares/multerMiddleware');

/* GET users listing. */
router.get('/', loggedUserMiddleware, UserController.signUp);
router.post('/', validationsSignUp, UserController.signUpValidation)
router.post('/create', UserController.createUser);

router.get('/login', loggedUserMiddleware, UserController.userLogin);
router.post('/login', UserController.loginProcess);
router.get('/recoverPassword', UserController.recoverPassword);

router.get('/account', notLoggedUserMiddleware, UserController.showUserAccount);
router.post('/account', uploadFile.single('avatar'), avatarValidation, UserController.editUserAvatar);


router.get('/logout', notLoggedUserMiddleware, UserController.logout);


module.exports = router;








