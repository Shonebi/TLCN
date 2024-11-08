"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Định nghĩa mối quan hệ với bảng ImageLink
      User.belongsTo(models.ImageLink, { foreignKey: "imageID" });
    }
  }

  User.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      numPhone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(35),
        unique: true,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        defaultValue: "Offline",
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(24),
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING(100),
        defaultValue: "User",
        allowNull: true,
        validate: {
          isIn: [["User", "Admin", "Staff"]],
        },
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      imageID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "ImageLink", // Tên của bảng tham chiếu
          key: "imageID",
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
