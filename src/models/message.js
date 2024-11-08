"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      // Liên kết với bảng User cho sender
      Message.belongsTo(models.User, { as: "Sender", foreignKey: "senderID" });

      // Liên kết với bảng User cho receiver
      Message.belongsTo(models.User, {
        as: "Receiver",
        foreignKey: "receiverID",
      });

      // Liên kết với bảng ImageLink
      Message.belongsTo(models.ImageLink, { foreignKey: "imageID" });
    }
  }

  Message.init(
    {
      messengerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      senderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "userID",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      receiverID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "userID",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      content: {
        type: DataTypes.STRING(2048),
        allowNull: true,
      },
      sentTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      imageID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "ImageLink",
          key: "imageID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );

  return Message;
};
