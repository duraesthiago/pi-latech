const {Product} = require("../database/models");
async function teste(){
    let products = await Product.findAll()
    console.log(products[0].toJSON())
}
teste()