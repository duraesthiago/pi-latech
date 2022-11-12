module.exports = (sequelize, DataTypes) => {

    let Product = sequelize.define(
        "Product",
        {
            idProdutos: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            Nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Codigo: { type: DataTypes.STRING },
            Preco: { type: DataTypes.DECIMAL },
            Categorias_id: { type: DataTypes.INTEGER },
            Marcas_id: { type: DataTypes.INTEGER }
        },
        {
            tableName: "products",
            timestamps: false,
            paranoid: false
        }
    )
    Product.associate = (models)=>{
        Product.belongsTo(models.Brand, {foreignKey:'Marcas_id', as: 'brands'});
        Product.belongsTo(models.Category, {foreignKey:'Categorias_id', as: 'categories'})
        Product.hasMany(models.Image, {foreignKey:'Produtos_idProdutos', as: 'images'})
        Product.belongsToMany(
            models.Purchase,
            {
                as: 'purchases',
                through: 'products_has_purchases',
                foreignKey: 'Produtos_idProdutos',
                otherKey: 'Pedidos_idPedidos',
                timestamps: false
            }
        );
    }

    return Product;

}