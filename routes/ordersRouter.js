const router = require('express').Router()
const ordersController = require('../controllers/OrdersController')
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

router.get('/', notLoggedUserMiddleware, ordersController.index)
router.post('/addCart', notLoggedUserMiddleware, ordersController.addCart)
router.get('/cart', notLoggedUserMiddleware, ordersController.showCart)

router.put('/updateCart', notLoggedUserMiddleware, ordersController.updateCart)
router.get('/release', notLoggedUserMiddleware, ordersController.releaseOrder)

router.get('/payment',notLoggedUserMiddleware, ordersController.payment)

router.post('/release', notLoggedUserMiddleware, ordersController.releaseOrder)

//router.post('/remove/:id', ordersController.removeProduct) 
//router.put('/cancel/:id', ordersController.cancelOrder)


module.exports = router

