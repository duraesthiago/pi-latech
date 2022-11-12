module.exports = (sequelize, DataTypes) => {

    let Brand = sequelize.define(
        "Brand", 
        {
            idMarcas: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
                },
                Marca: {
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

    Brand.associate = function(models){  
    Brand.hasMany(models.Product,{as:"products", foreignKey:"Marcas_id"});  
    Brand.hasMany(models.Image,{as:"images", foreignKey:"Marcas_idMarcas"})
    }

    return Brand;
}