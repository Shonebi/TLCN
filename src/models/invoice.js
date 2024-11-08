"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    static associate(models) {
      // Liên kết với bảng Order
      Invoice.belongsTo(models.Order, { foreignKey: "orderID" });

      // Liên kết với bảng Users (client)
      Invoice.belongsTo(models.User, { as: "Client", foreignKey: "clientID" });

      // Liên kết với bảng Users (staff)
      Invoice.belongsTo(models.User, { as: "Staff", foreignKey: "staffID" });
    }
  }

  Invoice.init(
    {
      invoiceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
      clientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "userID",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      staffID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "userID",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      totalInvoiceValue: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      invoiceDateCreate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Invoice",
    }
  );

  return Invoice;
};
