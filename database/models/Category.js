module.exports = (sequelize, DataTypes) => {

    let category = sequelize.define(
        "Category", 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
          tableName: "category",
          timestamps: false,
          paranoid: false

        }
        
    )
    // category.associate = function(model){  
    //     category.hasMany(model.Product,{as:"fk_product_category", foreignKey:"category_id"}); 
    // }
    return category

};  