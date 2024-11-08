'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    static associate(models) {
      // Liên kết với bảng Product
      Warehouse.belongsTo(models.Product, { foreignKey: 'productID' });
    }
  }

  Warehouse.init({
    productID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'productID',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Warehouse',
    timestamps: false, // Không cần `createdAt` và `updatedAt`
  });

  return Warehouse;
};
