'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product', {
      productID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      productName: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT, // Sử dụng TEXT cho chuỗi dài hơn 255 ký tự
        allowNull: true,
      },
      Price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      imageID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ImageLink', // Tên bảng tham chiếu
          key: 'imageID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      size: {
        type: Sequelize.STRING(5),
        allowNull: true,
        validate: {
          isIn: [['S', 'M', 'L', 'XL', 'XXL']],
        },
      },
      color: {
        type: Sequelize.STRING(10),
        allowNull: true,
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
    await queryInterface.dropTable('Product');
  },
};
