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
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            endereco: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Ciudad: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            avatar: {
                type: DataTypes.STRING,
                allowNull: false
            }         
            
        },
        {
          tableName: "clients",
          timestamps: false,
          paranoid: false

        }
        
    )
    // Client.associate = function(model){  
    //     Client.hasMany(model.Purchase,{as:"purchases", foreignKey:"Clientes_idClientes"}); 
    // }
    return Client

};  