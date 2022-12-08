// PARA TESTAR A MODEL- CONEXÃO COM BANCO DE DADOS-- Status OK
// const {User} = require("../database/models");
// async function teste(){
//     let users = await User.findAll()
//     console.log(users[0].toJSON())
// }
// teste()

//PARA TESTAR AS ASSOCIAÇÕES PURCHASES- Status ok
const {User} = require("../database/models");
async function teste(){
    let users = await User.findByPk(1, {include:["purchases"]})
        console.log(users.toJSON())
}
teste()