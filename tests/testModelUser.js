// PARA TESTAR A MODEL- CONEXÃO COM BANCO DE DADOS-- Status OK
<<<<<<< HEAD
// const {Client} = require("../database/models");
// async function teste(){
//     let clients = await Client.findAll()
//     console.log(clients[0].toJSON())
=======
// const {User} = require("../database/models");
// async function teste(){
//     let users = await User.findAll()
//     console.log(users[0].toJSON())
>>>>>>> master
// }
// teste()

//PARA TESTAR AS ASSOCIAÇÕES PURCHASES- Status ok
const {User} = require("../database/models");
async function teste(){
    let users = await User.findByPk(1, {include:["purchases"]})
        console.log(users.toJSON())
}
teste()