module.exports = (sequelize, DataTypes) => {

    let Purchase = sequelize.define(
        "Purchase",
        {
            idPedidos: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Data_Pedido: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Total: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            Forma_de_Pagamento: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Endereço_de_Entrega: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Users_idUsers: {
                type: DataTypes.INTEGER,
                allowNull: false
            }

        },
        {
            tableName: "purchases",
            timestamps: false,
            paranoid: false

        }

    )
<<<<<<< HEAD
    Purchase.associate = (models)=>{
    Purchase.belongsTo(models.User, {foreignKey:'Clientes_idClientes', as: 'clients'})
       Purchase.belongsToMany(
=======
    Purchase.associate = (models) => {
        Purchase.belongsTo(models.User, { foreignKey: 'Users_idUsers', as: 'users' })
        Purchase.belongsToMany(
>>>>>>> master
            models.Product,
            {
                as: 'products',
                through: 'products_has_purchases',
                foreignKey: 'Pedidos_idPedidos',
                otherKey: 'Produtos_idProdutos',
                timestamps: false
            }
        );

    }
    return Purchase
}



