const {Brand} = require("../database/models");
async function teste(){
    let brands = await Brand.findAll()
    console.log(brands[0].toJSON())
}
teste()

