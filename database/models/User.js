module.exports = (sequelize, DataTypes) => {

    let User = sequelize.define(
        "User",
        {
            idUser: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Sobrenome: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Cpf: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Telefone: {
                type: DataTypes.STRING,
                allowNull: true
            },            
            Senha: {
                type: DataTypes.STRING,
                allowNull: true
            },
            avatar: {
                type: DataTypes.STRING,
                allowNull: true
            }

        },
        {
            tableName: "users",
            timestamps: false,
            paranoid: false

        }

    )
    User.associate = function (models) {
        User.hasMany(models.Purchase, { as: "purchases", foreignKey: "Users_idUser" })
        User.hasMany(models.Address, { as: "addresses", foreignKey: "Users_idUser", })
    }
    return User;

};  