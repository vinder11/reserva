'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      detallesCuarto: {
        type: Sequelize.STRING,
      },
      diasEstadia: {
        type: Sequelize.INTEGER,
      },
      identificacionCliente: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.ENUM('Pendiente', 'Pagado', 'Eliminado'),
        allowNull: false,
        defaultValue: 'Pendiente',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  },
};
