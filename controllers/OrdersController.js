const db = require('../database/models')

const ordersController = {
    index: (req, res) => {
        let qty = 0
        if(req.session.products){
            qty = req.session.products.length
        }
        res.render('header', {products, qty})
    },
    
    addCart: (req, res) => {
        if(req.session.products){
            req.session.products.push(req.body.selectedProduct)
        } else {
            req.session.products = [req.session.selectedProduct]
        }
        res.redirect('/index')
        //console.log(req.session)
    },

                    /*<form action="/addCart" method="post">
                        <input type="hidden" name="selectedProduct" value="<%= p.id %>">
                        <button type="submit">+ Comprar</button>
                    </form>*/



    showCart: (req, res) => {
        let idsIntoCart = req.session.products
        let getProductbyId = (id) => {
            let productFound = Products.find(p => p.id == id)
            return productFound
        }
        let productsIntoCart = idsIntoCart.map(getProductById)
        /* db.Product.findByPk(req.params.id)
        .then(function(selectedProducts) {
            return res.render('cart', {products: selectedProducts})
        })
        .catch((error) => console.log(error))*/
    },
    deleteProduct: (req, res) => {}
}

module.exports = ordersController