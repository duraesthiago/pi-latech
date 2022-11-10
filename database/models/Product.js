module.exports = (sequelize, DataTypes) => {

    let product = sequelize.define(
        "Product",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            code: { type: DataTypes.STRING },
            price: { type: DataTypes.DECIMAL },
            category_id: { type: DataTypes.INTEGER },
            brand_id: { type: DataTypes.INTEGER },
        },
        {
            tableName: "product",
            timestamps: false,
            paranoid: false
        }
    )
    // product.associate = (models)=>{
    //     product.belongsTo(models.Brand, {foreignKey:'brand_id', as: 'fk_product_brand'});
    //     product.belongsTo(models.Category, {foreignKey:'category_id', as: 'fk_product_category'})
    //     product.belongsToMany(
    //         models.Order,
    //         {
    //             as: 'fk_product_has_order_product',
    //             through: 'fk_product_has_order_order',
    //             foreignKey: 'product_id',
    //             otherKey: 'order_id',
    //             timestamps: false
    //         }
    //     );
    // }

    return product;

}