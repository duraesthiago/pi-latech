const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const validationsAdminSignUp = require('../middlewares/validationsAdminSignUpMiddleware');

router.get('/main', AdminController.main);


router.get('/',  AdminController.signUp);
router.post('/create', validationsAdminSignUp, AdminController.createAdmin);

router.get('/login', AdminController.adminLogin);
router.post('/login', AdminController.adminLoginProcess);

router.get('/panel', AdminController.showAdminPanel);

router.get('/adminEditUser/:id', AdminController.adminEditUser);
router.post('/adminEditUser/:id', AdminController.updateUserData);



router.get('/logout',  AdminController.logoutAdmin);



module.exports = router;
