const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', IndexController.index);
router.get('/aboutUs', IndexController.aboutUs)
router.get('/search', IndexController.search);
router.get('/cart', IndexController.showCart);
router.post('/addCart', IndexController.addCart);
router.get('/:id', IndexController.showProduct);



module.exports = router;
