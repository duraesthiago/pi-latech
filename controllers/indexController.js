const { Op } = require("sequelize");
const { Product, Image } = require("../database/models");
const idProdutosComDesconto = [1, 2, 4, 5, 8, 29];
const IndexController = {
  index: async (req, res) => {
    let products = await Product.findAll({
      raw: true,
      include: [{
          model: Image, as: 'images',
      }],
      where: {
        idProdutos: idProdutosComDesconto
      }
  });    
    products = products.map((product) => {
      product.PrecoComDesconto = product.Preco * 0.7
      return product
    })
    console.log(products[0])
    res.render("index", { title: "Latech", products });
  },


  aboutUs: (req, res) => {


    res.render("aboutUs");
  },
  search: async (req, res) => {
    let q = req.query.q;
    let products = await Product.findAll({
      raw: true,
      include: [{
          model: Image, as: 'images',
      }],
      where: {
        Nome: {
          [Op.like]: `%${q}%`
        }
      }
    })
    products = products.map(
      (product) => {
        if (idProdutosComDesconto.includes(product.id)) {
          product.PrecoComDesconto = product.Preco * 0.7
        }else{
          product.PrecoComDesconto = product.Preco * 1     
        }        
        return product
      })
    res.render("search", { title: "Latech", products });
  },
  search: async (req, res) => {
    let q = req.query.q;
    let products = await Product.findAll({
      raw: true,
      include: [{
          model: Image, as: 'images',
      }],
      where: {
        Nome: {
          [Op.like]: `%${q}%`
        }
      }
    })
    products = products.map(
      (product) => {
        if (idProdutosComDesconto.includes(product.id)) {
          product.PrecoComDesconto = product.Preco * 0.7
        }else{
          product.PrecoComDesconto = product.Preco * 1     
        }        
        return product
      })
    res.render("search", { title: "Latech", products });
  },

  police: (req, res) => {
    res.render("privacyPolice")
  }

};

module.exports = IndexController;
