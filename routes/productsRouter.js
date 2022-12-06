const express = require('express');
const router = express.Router();

// ************ Controller ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** GET OFFER PRODUCTS ***/
router.get('/sale', productsController.sale);

/*** GET CATEGORY PRODUCTS ***/
router.get('/category', productsController.category);

/*** GET ONE PRODUCT ***/
router.get('/detail/:id/', productsController.detail);

module.exports = router;