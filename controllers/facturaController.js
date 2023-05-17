const { Factura, Reserva } = require('../models');

const crearFactura = async (req, res) => {
  try {
    // const { reservaId } = req.body;
    const reservaId = req.params.id;
    const reserva = await Reserva.findByPk(reservaId);

    if (!reserva) {
      throw new Error('reserva no encontrada');
    }
    if (reserva.estado == 'Eliminado' || reserva.estado == 'Pagado') {
      throw new Error(`no se puede pagar está reserva porque su estado es ${reserva.estado}`);
    }
    const factura = await Factura.create({ ...req.body, reservaId });
    reserva.estado = 'Pagado';
    await reserva.save();
    res.status(201).json(factura);
  } catch (error) {
    res.status(400).json({ error: `Error al generar el pago, ${error.message}` });
  }
};

module.exports = { crearFactura };
