// ************ Rquerimentos ************
const { Product, Category } = require("../database/models");


const controler = {
    index: async (req, res) => {
        let products = await Product.findAll({ raw: true });
        return res.render('products', { products });
    },
    sale: async (req, res) => {
        //TEMPORARIO - Necessita acrescentar campo oferta em produtos
        let productsOffer = [
            {
                idProdutos: 29,
                Nome: 'Fone de ouvido Headphone Philips Bluetooth 15h TAH1205BK/00',
                Codigo: null,
                Preco: '399.00',
                Categorias_id: 4,
                Marcas_id: 9
            }]

        //let products = await Product.findAll({ raw: true, where: { offer: true } });
        res.render('products', { products: productsOffer });
    },
    category: async (req, res) => {
        let reqCategory = req.query.category;
        let productsCategory = await Product.findAll({
            raw: true,
            include: [{
                model: Category, as: 'categories',
                where: {
                    Categoria: reqCategory
                }
            }]
        });

        res.render('products', { products: productsCategory });
    },
    detail: async (req, res) => {
        let id = req.params.id;
        let product = await Product.findByPk(id)
        res.render('productDetail', { product });
    }
}

module.exports = controler;
