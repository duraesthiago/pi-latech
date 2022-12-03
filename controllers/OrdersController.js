const { localsName } = require('ejs')
const db = require('../database/models')

const ordersController = {
    qtyToHeader: (req, res) => {
        let qty = 0
        if(req.session.products){
            qty = req.session.products.length
        }
        
        
        let products = db.Product.findAll()
        .then(function(productsReturned){
            
            return res.render('index.ejs', {products: productsReturned, qty})
        })
        .catch((error)=> console.log(error))
        
        //res.render('index', {locals, products })
    },

    getProducts: (req, res) =>  {
        req.session.products
        db.Product.findAll()
        .then(function(productsReturned){
            return res.render('index.ejs', {products: productsReturned})
        })
        .catch((error)=> console.log(error))
        console.log(products)
        
    },
         
    addCart: (req, res) => {
        if(req.session.cart){
            req.session.cart.push(req.body.selectedProduct)
        } else {
            req.session.cart = [req.body.selectedProduct]
        }
        console.log(req.body)
        
        console.log(req.session.cart)
        res.redirect('/orders')
        //console.log(req.session)
    },

                    
    showCart: (req, res) => {
        let idsIntoCart = req.session.products
        let getProductById = (id) => {
            let productFound = db.Product.findAll({
                where: { idProductos : {
                [Op.eq]: req.params.id
                }
               } 
              })  // procurar funcao sequelize
            return productFound
        }
        let productsIntoCart = idsIntoCart.map(getProductById)
                          
        res.render('cart.ejs', {productsIntoCart})
    },

    deleteProduct: (req, res) => {}
}

module.exports = ordersController 