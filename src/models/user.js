"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
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
        type: DataTypes.STRING(12),
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
        type: DataTypes.STRING(100),
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
          model: "ImageLink",
          key: "imageID",
        },
      },
      gender: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
