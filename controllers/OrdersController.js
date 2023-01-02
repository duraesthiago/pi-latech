const { Product, Address, Purchase } = require('../database/models')


const ordersController = {
    index: (req, res) => {

        Product.findAll()
            .then(function (productsReturned) {
            })
            return res.render('products.ejs', { products: productsReturned })
            .catch((error) => console.log(error))
            
    },

    addCart: (req, res) => {
        if (req.session.cart) {
            req.session.cart.push(req.body.selectedProduct)
        } else {

            req.session.cart = [req.body.selectedProduct]
        }

        res.redirect('/products')
    },


    showCart: async (req, res) => {
        let idsIntoCart = req.session.cart

        let getProductById = async (id) => {
            let productFound = await Product.findByPk(
                id, {
                raw: true,
                include: [
                    { association: 'images' },
                ]
            })
            return productFound
        }

        let productsIntoCart = await Promise.all(idsIntoCart.map(getProductById))

        productsIntoCart.forEach((p) => {
            p.quantidade = 1;
            p.totalProduto = p.Preco * p.quantidade;
        });

        req.session.order = productsIntoCart;
        let total = 0
        for(let i=0; i< productsIntoCart.length; i++)
        total += productsIntoCart[i].totalProduto
        console.log(total)
        

        res.render('cart.ejs', { productsIntoCart, total})
    },

    updateCart: (req, res) => {
        let idProductToChange = req.body.productId;
        let productQtyChanged = req.body.productQty;

        productsIntoCart = req.session.order;

        let index = productsIntoCart.findIndex((p) => p.idProdutos == idProductToChange);

        productsIntoCart[index].quantidade = productQtyChanged;
        productsIntoCart[index].totalProduto = productsIntoCart[index].Preco * productsIntoCart[index].quantidade;
        
        let total = 0
        for(let i=0; i< productsIntoCart.length; i++)
        total += productsIntoCart[i].totalProduto
        console.log(total)

        req.session.order = productsIntoCart;
        req.session.total = total
            
        res.render('cart.ejs', { productsIntoCart, total });

    },

    payment: async (req, res) => {
        let addresses = await Address.findAll()  
        productsIntoCart = req.session.order
        total = req.session.total

        res.render('cartPayment.ejs', { productsIntoCart, total, addresses: addresses })
    },

    releaseOrder: (req, res) => {
        let pedidos = req.session.order
        //let total = req.session.total
                
        /*db.Purchase.create({
            Data_Pedido: new Date().toISOString(),
            Total: req.session.total,
            Forma_de_Pagamento:
            Endereço_de_Entrega:
                    })*/
    }
}

module.exports = ordersController 