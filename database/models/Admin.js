module.exports = (sequelize, DataTypes) => {

    let Admin = sequelize.define(
        "Admin",
        {
            idAdmin: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false
            },
           
            Email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            WorkerId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Password: {
                type: DataTypes.STRING,
                allowNull: false 
            },

           
        },
        {
            tableName: "admin",
            timestamps: false,
            paranoid: false

        }

    )
    Admin.associate = function (models) {
        Admin.hasMany(models.Purchase, { as: "purchases", foreignKey: "admin_idAdmin" })
        Admin.hasMany(models.Product, { as: "products", foreignKey: "admin_idAdmin" })
        Admin.hasMany(models.User, { as: "users", foreignKey: "admin_idAdmin" })

   }
    return Admin

};