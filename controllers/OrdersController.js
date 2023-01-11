const { Product, Address, User, Purchase } = require('../database/models')
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
        console.log(req.body.selectedProduct)
        console.log(req.session.cart)
        res.redirect('/products')
    },
    showCart: async (req, res) => {
        let idsIntoCart = req.session.cart
        
        let idsFilter = [...new Set(idsIntoCart)]
        
        let qtyUpdated = idsFilter.length
        req.session.cart = idsFilter
        res.locals.qty = qtyUpdated
        
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

        let productsIntoCart = await Promise.all(idsFilter.map(getProductById))

        productsIntoCart.forEach((p) => {
            p.quantidade = 1;
            p.totalProduto = p.Preco * p.quantidade;
        });
        req.session.order = productsIntoCart;
        let total = 0
        for(let i=0; i< productsIntoCart.length; i++)
        total += productsIntoCart[i].totalProduto          
         
        req.session.total = total

        res.render('cart.ejs', { productsIntoCart, total, qtyUpdated})
    },
    updateCart: (req, res) => {
        
        let idProductToChange = req.body.productId;
        let productQtyChanged = req.body.productQty;
        productsIntoCart = req.session.order;
        let index = productsIntoCart.findIndex((p) => p.idProdutos == idProductToChange);
        productsIntoCart[index].quantidade = productQtyChanged;
        productsIntoCart[index].totalProduto = productsIntoCart[index].Preco * productsIntoCart[index].quantidade;
        let total = 0
        for (let i = 0; i < productsIntoCart.length; i++)
            total += productsIntoCart[i].totalProduto
        
        req.session.order = productsIntoCart;
        req.session.total = total
        res.render('cart.ejs', { productsIntoCart, total });
    },
    removeProduct: (req, res) => {
        
        let idParaRemover = req.params.id
        if(req.session.cart){
            req.session.cart = req.session.cart.filter( id => id !=idParaRemover)
        }
        
        res.redirect('/orders/cart')
    },

    payment: async (req, res) => {            
                          
        let loggedUser = (req.session.userLogged !== undefined)
        
        let id = req.session.userLogged? req.session.userLogged.idUser : 0;

        let user = await User.findByPk(id, {
            raw: true,
            include: [
                { model: Address, as: 'addresses' }
            ]
        });
        let addressesUser = await Address.findAll({raw: true, where:{users_idUser: id}});
        productsIntoCart = req.session.order

        total = req.session.total
        
        
        res.render('cartPayment.ejs', { productsIntoCart, total, user, loggedUser, addressesUser, })
        
    },

        
    releaseOrder: async (req, res) => {
        let pedidos = req.session.order
        
        let newAdress = await Address.create({
            Endereco: req.body.endereco,
            Cidade: req.body.cidade,
            Estado: req.body.estado,
            users_idUser: req.session.userLogged.idUser
        })
        
        let deliveryAddress = ''
        if(req.body.endereco){
            deliveryAddress = req.body.endereco
        } else {
            deliveryAddress = req.body.address_id
        }
                
        req.session.total = total
        
                     
        let newPurchase = await Purchase.create({
            Data_pedido: new Date().toISOString(),
            Total: req.session.total,
            Forma_de_Pagamento: req.body.payment,
            Endereço_de_Entrega: deliveryAddress,
            Users_idUser: req.session.userLogged.idUser,
        })
        res.send("Pedido Finalizado com sucesso");
    }
}
module.exports = ordersController