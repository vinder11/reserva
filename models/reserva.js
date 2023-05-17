'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reserva.hasOne(models.Factura, {
        foreignKey: 'reservaId',
        as: 'factura',
      });
    }
  }
  Reserva.init(
    {
      detallesCuarto: DataTypes.STRING,
      diasEstadia: DataTypes.INTEGER,
      identificacionCliente: DataTypes.STRING,
      estado: {
        type: DataTypes.ENUM('Pendiente', 'Pagado', 'Eliminado'),
        defaultValue: 'Pendiente',
      },
    },
    {
      sequelize,
      modelName: 'Reserva',
    }
  );
  return Reserva;
};
