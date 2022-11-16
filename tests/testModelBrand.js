//PARA TESTAR A MODEL- CONEXÃO COM BANCO DE DADOS-- Status OK
// const {Brand} = require("../database/models");
// async function teste(){
//     let brands = await Brand.findAll()
//     console.log(brands[0].toJSON())
// }
// teste()

//PARA TESTAR AS ASSOCIAÇÕES PRODUCTS- Status ok
// const {Brand} = require("../database/models");
// async function teste(){
//     let brands = await Brand.findByPk(1, {include:["products"]})
//     console.log(brands.toJSON())
// }
// teste()

//PARA TESTAR AS ASSOCIAÇÕES IMAGES- Status ok
const {Brand} = require("../database/models");
async function teste(){
    let brands = await Brand.findByPk(1, {include:["images"]})
    console.log(brands.toJSON())
}
teste()

