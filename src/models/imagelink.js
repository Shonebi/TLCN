"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ImageLink extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  ImageLink.init(
    {
      imageID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      link: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imageType: {
        // Định nghĩa cột imageType trong model
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "ImageLink",
    }
  );

  return ImageLink;
};
