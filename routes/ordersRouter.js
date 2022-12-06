const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController');

router.get('/cart', OrdersController.showCart);

module.exports = router;