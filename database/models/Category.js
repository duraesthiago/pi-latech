module.exports = (sequelize, DataTypes) => {

    let Category = sequelize.define(
        "Category", 
        {
            idCategorias: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Categoria: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
          tableName: "categories",
          timestamps: false,
          paranoid: false

        }
        
    )
    Category.associate = function(model){  
        Category.hasMany(model.Product,{as:"categories", foreignKey:"Categorias_id"}); 
    }
    return Category

};  