const db = require('../database/models')

const OrdersController = {
    showCart: (req, res) => {
        res.render('cart')
    }
}
module.exports = OrdersController
// let idsIntoCart = req.session.cart
// let getProductById = async (id) => {
//     const {Op} = require("sequelize")
//     let productsFound = await db.Product.findAll({
//         where: {
//             idProdutos : {
//         [Op.eq]: id
//         }
//        }
//       })
//     return productsFound
//     //console.log(productsFound)
// }
// let productsIntoCart = idsIntoCart.map(getProductById)
// res.render('cart.ejs', {productsIntoCart})