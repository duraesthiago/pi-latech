const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', IndexController.index);
router.get('/aboutUs', IndexController.aboutUs)
router.get('/search', IndexController.search);



module.exports = router;
