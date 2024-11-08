"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    static associate(models) {
      // Liên kết với bảng Order
      OrderDetail.belongsTo(models.Order, { foreignKey: "orderID" });

      // Liên kết với bảng Product
      OrderDetail.belongsTo(models.Product, { foreignKey: "productID" });
    }
  }

  OrderDetail.init(
    {
      orderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Order",
          key: "orderID",
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
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );

  return OrderDetail;
};
