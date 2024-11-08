"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    static associate(models) {
      // Liên kết với bảng Users
      ShoppingCart.belongsTo(models.User, { foreignKey: "userID" });

      // Liên kết với bảng Product
      ShoppingCart.belongsTo(models.Product, { foreignKey: "productID" });
    }
  }

  ShoppingCart.init(
    {
      cartID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "userID",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "productID",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "ShoppingCart",
    }
  );

  return ShoppingCart;
};
