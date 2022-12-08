const db = require('../database/models')


const ordersController = {
    index: (req, res) => {
        // let qty = 0
        // if(req.session.cart){
        //     qty = req.session.cart.length
        // }
        // //locals.products.length
        // console.log(qty)

        db.Product.findAll()
        .then(function(productsReturned){
            
            return res.render('products.ejs', {products: productsReturned})
            
        })
        .catch((error)=> console.log(error))
        
        
            .then(function (productsReturned) {

                return res.render('products.ejs', { products: productsReturned })

            })
            .catch((error) => console.log(error))


    },

    addCart: (req, res) => {
        if (req.session.cart) {
            req.session.cart.push(req.body.selectedProduct)
        } else {
            req.session.cart = [req.body.selectedProduct]
        }
        console.log(req.body)

        console.log(req.session.cart)
        res.redirect('/orders')
        //console.log(req.session)
    },


    showCart: async (req, res) => {
        let idsIntoCart = req.session.cart

        let getProductById = async (id) => {
            let productFound = await db.Product.findByPk(
                id, {
                raw: true,
                include: [
                    { association: 'images' },
                ]
            }
            )

            return productFound
        }
        //let productsIntoCart = await Promise.all(getProductById.map(idsIntoCart))
        let productsIntoCart = await Promise.all(idsIntoCart.map(getProductById))
        console.log(productsIntoCart)
        res.render('cart.ejs', { productsIntoCart })

    },

    showTotal: (req, res) => {

    },


    removeProduct: (req, res) => {
        //req.session.cart
        //let addProduct = document.getElementById("btn-add")

    },

    releaseOrder: (req, res) => {
        /*let total = 0
        for (let i = 0; i < productsReturned.length; i++) {
            sum += productsReturned[i].preco
            return total
        }
        db.Purchase.create({
            Data_Pedido:,
            Total:
            Forma_de_Pagamento:
            Endereço_de_Entrega:
                    })*/
    }
}

module.exports = ordersController 
