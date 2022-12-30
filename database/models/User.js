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
            Endereco: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Cidade: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Estado: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            avatar: {
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
    User.associate = function(model){  
        User.hasMany(model.Purchase,{as:"purchases", foreignKey:"Clientes_idClientes"}); 
    }
    return User

};  