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
            Endereço_de_Entrega: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Users_idUser: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            addresses_idAddresses: {
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
    Purchase.associate = (models) => {
        Purchase.belongsTo(models.User, { foreignKey: 'Users_idUsers', as: 'users' })
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
        Purchase.belongsTo(models.Address, {as: 'addresses', foreignKey:"addresses_idAddresses"
            })


    }
    return Purchase
}



