module.exports = function (sequelize, dataTypes) {
    ;
    let alias = "Brand";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: "brand",
        timestamps: false
    }

    let Brand = sequelize.define(alias, cols, config);

    //Brand.associate = function(models){  
    // Brand.hasMany(models.Product,{as:"fk_product_brand", foreignKey:"brand_id"});  
    // Brand.hasMany(models.Image,{as:"fk_image_brand", foreignKey:"brand_id"})
    //}
    return Brand;
}
