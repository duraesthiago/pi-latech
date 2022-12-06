const db = require('../database/models')


const ordersController = {
    index: (req, res) => {
        let qty = 0
        if(req.session.products){
            qty = req.session.products.length
        }
        //locals.products.length
        console.log(qty)
        
        db.Product.findAll()
        .then(function(productsReturned){
            
            return res.render('index.ejs', {products: productsReturned, qty})
            
        })
        .catch((error)=> console.log(error))
        
        //res.render('index', {locals, products })
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
        let idsIntoCart = req.session.cart

        let getProductById = async (id) => {
            const {Op} = require("sequelize")
            let productsFound = await db.Product.findAll({
                where: { 
                    idProdutos : {
                [Op.eq]: id
                }
               } 
              })  
              return productsFound
            console.log(productsFound)
        }
        let productsIntoCart = idsIntoCart.map(getProductById)
                          
        res.render('cart.ejs', {productsIntoCart})
        
    },
   
    
    removeProduct: (req, res) => {
        //req.session.cart
        //let addProduct = document.getElementById("btn-add")

    },

    releaseOrder: (req, res) =>{
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