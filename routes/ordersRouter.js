const router = require('express').Router()
const ordersController = require('../controllers/OrdersController')
//const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware')

router.get('/', ordersController.index)
router.post('/addCart', ordersController.addCart)
router.get('/cart', ordersController.showCart)

router.put('/updateCart', ordersController.updateCart)
router.delete('/removeProduct/:id', ordersController.removeProduct)

router.get('/payment', ordersController.payment)

router.get('/release', ordersController.releaseOrder)
router.post('/release', ordersController.releaseOrder)

//router.put('/cancel/:id', ordersController.cancelOrder)


module.exports = router
