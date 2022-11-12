//PARA TESTAR A MODEL
// const {Purchase} = require("../database/models");
// async function teste(){
//     let purchases = await Purchase.findAll()
//     console.log(purchases[0].toJSON())
// }
// teste()

// //PARA TESTAR AS ASSOCIAÇÕES
// const {Purchase} = require("../database/models");
// async function teste(){
//     let purchases = await Purchase.findByPk(1, {include:["products"]})
//     console.log(purchases.toJSON())
// }
// teste()
const {Purchase} = require("../database/models");
async function teste(){
    let purchases = await Purchase.findByPk(1, {include:["clients"]})
    console.log(purchases.toJSON())
}
teste()