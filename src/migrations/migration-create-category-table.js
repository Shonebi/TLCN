  "use strict";

  module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Category", {
        categoryID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        categoryName: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        productID: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "Product", // Tên bảng tham chiếu
            key: "productID",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL ",
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
      await queryInterface.dropTable("Category");
    },
  };
