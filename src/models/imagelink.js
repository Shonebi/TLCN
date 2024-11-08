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
    },
    {
      sequelize,
      modelName: "ImageLink",
    }
  );

  return ImageLink;
};
