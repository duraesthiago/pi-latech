module.exports = (sequelize, DataTypes) => {

    let Address = sequelize.define(
        "Address",
        {
            idAddresses: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            Endereco: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Cidade: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Estado: {
                type: DataTypes.STRING,
                allowNull: true
            },
            users_idUser: {
                type: DataTypes.INTEGER,
                allowNull: false
            }

        },
        {
            tableName: "addresses",
            timestamps: false,
            paranoid: false
        }
    )
    Address.associate = (models) => {
        Address.belongsTo(models.User, { foreignKey: 'users_idUser', as: 'users' });
        Address.hasMany(models.Purchase, { foreignKey: 'addresses_idAddresses', as: 'purchases' })

    }


    return Address;

}