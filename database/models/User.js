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
                allowNull: false
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Cpf: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Telefone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Senha: {
                type: DataTypes.STRING,
                allowNull: false // pq pode ser null?
            },

            Cpf: {
                type: DataTypes.STRING,
                allowNull: false
            },

            Avatar: {
                type: DataTypes.STRING,
                allowNull: false
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
    return User

};  