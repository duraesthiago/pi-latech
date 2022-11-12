// PARA TESTAR A MODEL- CONEXÃO COM BANCO DE DADOS-- Status OK
// const {Category} = require("../database/models");
// async function teste(){
//     let categories = await Category.findAll()
//     console.log(categories[0].toJSON())
// }
// teste()

//PARA TESTAR AS ASSOCIAÇÕES PRODUCTS- Status ok
const {Category} = require("../database/models");
async function teste(){
    let categories = await Category.findByPk(1, {include:["categories"]})
    console.log(categories.toJSON())
}
teste()