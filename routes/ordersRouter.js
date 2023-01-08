const router = require('express').Router()
const ordersController = require('../controllers/OrdersController')
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

router.get('/', ordersController.index)
router.post('/addCart', ordersController.addCart)
router.get('/cart', ordersController.showCart)

router.put('/updateCart', ordersController.updateCart)
router.get('/release', ordersController.releaseOrder)

router.put('/updateCart', ordersController.updateCart)
router.get('/release', ordersController.releaseOrder)

router.get('/payment', ordersController.payment)
//router.post('/payment', ordersController.payment)

router.get('/payment', ordersController.payment)
//router.post('/payment', ordersController.payment)

router.post('/release', ordersController.releaseOrder)
router.post('/release', ordersController.releaseOrder)

//router.post('/remove/:id', ordersController.removeProduct) 
//router.put('/cancel/:id', ordersController.cancelOrder)


module.exports = router

