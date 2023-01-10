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
            },
            admin_idAdmin: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }

        },
        {
            tableName: "users",
            timestamps: false,
            paranoid: false

        }

    )
    User.associate = function (models) {
        User.hasMany(models.Purchase, { as: "purchases", foreignKey: "Users_idUser", onDelete: 'CASCADE' })
        User.hasMany(models.Address, { as: "addresses", foreignKey: "users_idUser", onDelete: 'CASCADE' })
        User.belongsTo(models.Admin, { as: "admin", foreignKey: "admin_idAdmin" })

    }
    return User

};  