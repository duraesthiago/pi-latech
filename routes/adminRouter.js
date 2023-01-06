const express = require('express');
const router = express.Router(); 

const AdminController = require('../controllers/AdminController');

const validationsAdminSignUp = require('../middlewares/validationsAdminSignUpMiddleware');
const loggedAdminMiddleware = require('../middlewares/loggedAdminDataMiddleware')
const notLoggedAdminMiddleware = require('../middlewares/notLoggedAdminMiddleware,')


router.get('/',  AdminController.admin);

router.get('/signUp', loggedAdminMiddleware, AdminController.adminSignUp);
router.post('/create', validationsAdminSignUp, AdminController.createAdmin);

router.get('/login', loggedAdminMiddleware, AdminController.adminLogin);
router.post('/login', AdminController.adminLoginProcess);

router.get('/panel', notLoggedAdminMiddleware, AdminController.showAdminPanel);

router.get('/adminUsersList', notLoggedAdminMiddleware, AdminController.getUsers);

router.get('/adminEditUser/:id', AdminController.adminUserToEdit);
router.put('/adminEditUser/:id/update', AdminController.updateUserData);
router.post('/adminDeleteUser/:id', AdminController.adminDeleteUser);

router.get('/adminProduct', notLoggedAdminMiddleware, AdminController.adminShowProduct);

router.get('/adminProductCreate', notLoggedAdminMiddleware,  AdminController.adminShowCreateProduct);
router.post('/adminProductCreate/create', AdminController.adminCreateProduct);


router.get('/adminEditProduct/:id', notLoggedAdminMiddleware, AdminController.adminShowOneProduct);
router.put('/adminEditProduct/:id/update', AdminController.adminEditProduct);

router.get('/adminSearchProduct',notLoggedAdminMiddleware, AdminController.adminSearchProduct);

router.post('/adminDeleteProduct/:id', AdminController.adminDeleteProduct)

router.get('/logout', notLoggedAdminMiddleware, AdminController.logoutAdmin);



module.exports = router;
