const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// router.get('/', AdminController.register);
// router.post('/', AdminController.createAdmin);

// router.get('/login', AdminController.adminLogin);
// router.post('/login', AdminController.adminLoginProcess);

router.get('/', AdminController.showAdminPanel);

module.exports = router;
