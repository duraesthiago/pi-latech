// PARA TESTAR A MODEL- CONEXÃO COM BANCO DE DADOS-- Status OK
// const {Client} = require("../database/models");
// async function teste(){
//     let clients = await Client.findAll()
//     console.log(clients[0].toJSON())
// }
// teste()

//PARA TESTAR AS ASSOCIAÇÕES PURCHASES- Status ok
const {Client} = require("../database/models");
async function teste(){
    let clients = await Client.findByPk(1, {include:["purchases"]})
        console.log(clients.toJSON())
}
teste()