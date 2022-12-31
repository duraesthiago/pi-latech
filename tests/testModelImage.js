// PARA TESTAR A MODEL- CONEXÃO COM BANCO DE DADOS-- Status OK
// const {Image} = require("../database/models");
// async function teste(){
//     let images = await Image.findAll()
//     console.log(images[0].toJSON())
// }
// teste()


//PARA TESTAR AS ASSOCIAÇÕES PROCUCTS- Status ok
// const {Image} = require("../database/models");
// async function teste(){
//     let images = await Image.findByPk(1, {include:["products"]})
//     console.log(images.toJSON())
// }
// teste()

//PARA TESTAR AS ASSOCIAÇÕES BRANDS- Status ok
const {Image} = require("../database/models");
async function teste(){
    let images = await Image.findByPk(1, {include:["brands"]})
    console.log(images.toJSON())
}
teste()

