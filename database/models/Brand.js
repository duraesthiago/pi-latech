module.exports = (sequelize, DataTypes) => {

    let Brand = sequelize.define(
        "Brand", 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
                },
                name: {
                type: DataTypes.STRING,
                allowNull: false
                }
        },
        {
          tableName: "brands",
          timestamps: false,
          paranoid: false

        }
        
    )

    // Brand.associate = function(models){  
    // Brand.hasMany(models.Product,{as:"fk_product_brand", foreignKey:"Marcas_id"});  
    // Brand.hasMany(models.Image,{as:"image", foreignKey:"Marcas_idMarcas"})
    // }

    return Brand;
}