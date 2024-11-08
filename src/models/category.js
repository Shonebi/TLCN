"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Liên kết với bảng Product
      Category.belongsTo(models.Product, { foreignKey: "productID" });
    }
  }

  Category.init(
    {
      categoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryName: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      productID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Product",
          key: "productID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  return Category;
};
