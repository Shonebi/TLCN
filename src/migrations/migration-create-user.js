"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      userID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userName: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      numPhone: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(35),
        unique: true,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING(10),
        defaultValue: "Offline",
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(24),
        allowNull: true,
      },
      role: {
        type: Sequelize.STRING(100),
        defaultValue: "User",
        allowNull: true,
        validate: {
          isIn: [["User", "Admin", "Staff"]],
        },
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      imageID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ImageLink", // Bảng tham chiếu
          key: "imageID",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      gender: {
        // Thêm cột gender
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 0, // 0 là Nữ, 1 là Nam
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
