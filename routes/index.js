const express = require('express');
const { validarCreacion, validarActualizacion, validarPago } = require('../validators/reserva');
const { crearFactura } = require('../controllers/facturaController');
const {
  obtenerReservas,
  obtenerReservaId,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require('../controllers/reservaController');

const router = express.Router();

router.get('/reservas', obtenerReservas);
router.get('/reservas/:id', obtenerReservaId);
router.post('/reservas', validarCreacion, crearReserva);
router.put('/reservas/:id', validarActualizacion, actualizarReserva);
router.delete('/reservas/:id', eliminarReserva);
router.post('/reservas/:id/pago', validarPago, crearFactura);

module.exports = { router };
