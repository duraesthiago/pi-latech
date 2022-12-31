const {Admin} = require("../database/models");
async function teste(){
    let admin = await Admin.findByPk(1, {include:["products"]})
        console.log(admin.toJSON())
}
teste()
