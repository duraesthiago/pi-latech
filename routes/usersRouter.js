const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

const validationsSignUp = require('../middlewares/validationsSignUpMiddleware');
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware');
const uploadFile = require('../middlewares/multerMiddleware');

/* GET users listing. */
router.get('/', loggedUserMiddleware, UserController.signUp);
router.post('/create', uploadFile.single('avatar'), validationsSignUp, UserController.createUser);


router.get('/login', loggedUserMiddleware, UserController.userLogin);
router.post('/login', UserController.loginProcess);
router.get('/recoverPassword', UserController.recoverPassword);

router.get('/account/', notLoggedUserMiddleware, UserController.showUserAccount);


router.get('/accountUpdate/:id', UserController.updateUser);
router.post('/updateUserData/:id', UserController.updateUserData);


router.get('/logout', notLoggedUserMiddleware, UserController.logout);

router.post('/delete/:id',  UserController.deleteUser);



module.exports = router;








