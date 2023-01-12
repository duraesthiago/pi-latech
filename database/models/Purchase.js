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
            Data_pedido: {
                type: DataTypes.DATE,
                allowNull: true
            },

            Total: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            Forma_de_Pagamento: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Users_idUser: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Endereço_de_Entrega: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Detalhe_Produtos: {
                type: DataTypes.JSON,
                allowNull: true
            }
        },
        {
            tableName: "purchases",
            timestamps: false,
            paranoid: false


        }


    )
    Purchase.associate = (models) => {

        Purchase.belongsTo(models.User, { foreignKey: 'Users_idUser', as: 'users' })
        Purchase.belongsTo(models.Admin, { foreignKey: 'admin_idAdmin', as: 'admin' })

        Purchase.belongsToMany(
            models.Product,
            {
                as: 'products',
                through: 'products_has_purchases',
                foreignKey: 'Pedidos_idPedidos',
                otherKey: 'Produtos_idProdutos',
                timestamps: false
            }
        )


    }
    return Purchase
}






