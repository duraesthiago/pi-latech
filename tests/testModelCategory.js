const {Category} = require("../database/models");
async function teste(){
    let categories = await Category.findAll()
    console.log(categories[0].toJSON())
}
teste()