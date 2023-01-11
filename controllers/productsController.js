// ************ Rquerimentos ************
const { Product, Category, Image, Brand } = require("../database/models");


const controler = {
    index: async (req, res) => {
        let products = await Product.findAll({
            raw: true,
            where: { Status: 1 },
            include: [{
                model: Image, as: 'images'
            }]
        });
        return res.render('products', { title: 'Produtos', products });
    },
    sale: async (req, res) => {
        let productsOffer = await Product.findAll({
            raw: true, where: { Oferta: true, Status: 1 }, include: [{
                model: Image, as: 'images',
            }]
        });
        res.render('products', { title: 'Ofertas', products: productsOffer });
    },
    category: async (req, res) => {
        let reqCategory = req.query.category;
        let productsCategory = await Product.findAll({
            raw: true,
            where: {
                Status: 1
            },
            include: [{
                model: Category, as: 'categories',
                where: {
                    Categoria: reqCategory
                },
            },
            { model: Image, as: 'images' }]
        });

        res.render('products', { products: productsCategory });
    },
    detail: async (req, res) => {
        let id = req.params.id;
        let product = await Product.findByPk(id, {
            raw: true,
            include: [
                { model: Image, as: 'images' },
                { model: Brand, as: 'brands' },
                { model: Category, as: 'categories' }
            ]
        })
        res.render('productDetail', { product });
    },
    edit: async (req, res) => {
        let id = req.params.id;
        let product = await Product.findByPk(id, {
            raw: true,
            include: [
                { model: Image, as: 'images' },
                { model: Brand, as: 'brands' },
                { model: Category, as: 'categories' }
            ]
        });
        res.render('productEdit', { product });
    },

    update: async (req, res) => {
        let id = req.params.id;
        let product = await Product.findByPk(id)
        product.set({
            Nome: req.body.Nome,
            Preco: req.body.Preco,
            Informacoes: req.body.Informacoes
        });

        await product.save();
        res.redirect('/products');
    }
}

module.exports = controler;
