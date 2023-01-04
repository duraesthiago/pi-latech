module.exports = (sequelize, DataTypes) => {

    let Image = sequelize.define(
        "Image",
        {
            idImagens: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            Nome: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Data_Upload: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Imagem: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Produtos_idProdutos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Marcas_idMarcas: {
                type: DataTypes.INTEGER,
                allowNull: false
            }

        },
        {
            tableName: "images",
            timestamps: false,
            paranoid: false
        }
    )
    Image.associate = (models) => {
        Image.belongsTo(models.Brand, { foreignKey: 'Marcas_idMarcas', as: 'brands' });
        Image.belongsTo(models.Product, { foreignKey: 'Produtos_idProdutos', as: 'products' })
    }


    return Image;

}