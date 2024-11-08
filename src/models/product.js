"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.ImageLink, { foreignKey: "imageID" });
    }
  }

  Product.init(
    {
      productID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT, // Sử dụng TEXT cho chuỗi dài hơn 255 ký tự
        allowNull: true,
      },
      Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      imageID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "ImageLink", // Tên bảng tham chiếu
          key: "imageID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      size: {
        type: DataTypes.STRING(5),
        allowNull: true,
        validate: {
          isIn: [["S", "M", "L", "XL", "XXL"]],
        },
      },
      color: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
