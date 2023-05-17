const { Reserva, Factura } = require('../models');

const obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      include: {
        model: Factura,
        as: 'factura',
        attributes: ['nit', 'razonSocial', 'metodoPago', 'montoPagado'],
      },
    });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};

const obtenerReservaId = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id, {
      include: {
        model: Factura,
        as: 'factura',
        attributes: ['nit', 'razonSocial', 'metodoPago', 'montoPagado'],
      },
    });
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

const crearReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la reserva' });
  }
};

const actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    delete req.body.estado;
    await reserva.update(req.body);
    res.json(reserva);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la reserva' });
  }
};

const eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva || reserva.estado == 'Eliminado') {
      return res.status(404).json({ error: 'Reserva no encontrada o ya fue eliminada' });
    }
    await reserva.update({ estado: 'Eliminado' });
    res.json({ message: 'Reserva eliminada exitosamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar la reserva' });
  }
};

module.exports = {
  obtenerReservas,
  obtenerReservaId,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
};
