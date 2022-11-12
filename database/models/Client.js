module.exports = (sequelize, DataTypes) => {

    let Client = sequelize.define(
        "Client", 
        {
            idClientes: {
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
                allowNull: true
            }         
            
        },
        {
          tableName: "clients",
          timestamps: false,
          paranoid: false

        }
        
    )
    Client.associate = function(model){  
        Client.hasMany(model.Purchase,{as:"purchases", foreignKey:"Clientes_idClientes"}); 
    }
    return Client

};  