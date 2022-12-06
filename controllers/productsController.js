const { Product } = require("../database/models");


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
            include: ["categories"],
            where: { 'categories.Categoria': reqCategory }
        });

        console.log(productsCategory);
        console.log(reqCategory);
        console.log(productsCategory[29].categories)


        res.render('products', { products: productsCategory });
    },
    detail: (req, res) => {
        let id = req.params.id;
        let product = products.find(p => p.id == id);
        res.render('detail', { product });
    }
}

module.exports = controler;
