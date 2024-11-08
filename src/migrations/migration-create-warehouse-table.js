'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Warehouse', {
      productID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Product', // Tên bảng tham chiếu
          key: 'productID',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Warehouse');
  },
};
