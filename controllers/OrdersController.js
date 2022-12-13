const db = require('../database/models')


const ordersController = {
    index: (req, res) => {

        db.Product.findAll()
            .then(function (productsReturned) {
                return res.render('index.ejs', { products: productsReturned })
            })
            .catch((error) => console.log(error))

    },

    addCart: (req, res) => {
        if (req.session.cart) {
            req.session.cart.push(req.body.selectedProduct)
        } else {

            req.session.cart = [req.body.selectedProduct]
        }
        //console.log(req.body)
       // console.log(req.session.cart)

        res.redirect('/orders')
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
            })
            return productFound
        }

        let productsIntoCart = await Promise.all(idsIntoCart.map(getProductById))
        req.session.cart = productsIntoCart;

        productsIntoCart.forEach((p)=>{
            p.quantidade = 1;
            p.totalProduto = p.Preco * p.quantidade;
        });

            console.log(productsIntoCart)
        res.render('cart.ejs', { productsIntoCart })
    },
    
    updateCart: (req, res) => {
        let idProductToChange = req.body.productId;
        let productQtyChanged = req.body.productQty;

        productsIntoCart = req.session.cart;

        let index = productsIntoCart.findIndex((p) => p.idProdutos == idProductToChange);

        productsIntoCart[index].quantidade = productQtyChanged;
        productsIntoCart[index].totalProduto = p.Preco * p.quantidade;

        res.render('cart.ejs', {productsIntoCart});

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
