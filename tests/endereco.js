//const {Address, sequelize} = require('../database/models')

const {Address} = require('../database/models');
 async function teste(){
     let enderecos = await Address.findAll({include:'users'})
     console.log(enderecos)
} 
teste()