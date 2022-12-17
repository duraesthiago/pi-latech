// ************ Rquerimentos ************
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

/*** EDIT ONE PRODUCT ***/
router.get('/:id/edit', productsController.edit);
router.put('/:id/edit', productsController.update);

module.exports = router;
