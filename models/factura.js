'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Factura.belongsTo(models.Reserva, {
        foreignKey: 'reservaId',
        // as: 'reserva',
      });
    }
  }
  Factura.init(
    {
      nit: DataTypes.STRING,
      razonSocial: DataTypes.STRING,
      montoPagado: DataTypes.FLOAT,
      metodoPago: DataTypes.STRING,
      reservaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Factura',
    }
  );
  return Factura;
};
