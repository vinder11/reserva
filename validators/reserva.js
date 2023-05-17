const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validarCreacion = [
  check('detallesCuarto')
    .exists()
    .withMessage('El detalle del cuarto debe ser especificado')
    .notEmpty()
    .withMessage('El detalle del cuarto no puede estar vacío')
    .isLength({ min: 5 })
    .withMessage('El detalle del cuarto debe tener al menos 5 caracteres'),
  check('diasEstadia')
    .exists()
    .withMessage('Los días de estadía deben ser especificados')
    .isNumeric()
    .withMessage('Los días de estadía deben ser números')
    .custom((value, { req }) => {
      if (value <= 0) {
        throw new Error('Los días de estadías deben ser de al menos un día');
      }
      return true;
    }),
  check('identificacionCliente')
    .exists()
    .withMessage('La identificación del cliente debe ser especificado')
    .notEmpty()
    .withMessage('La identificación del cliente no puede estar vacía')
    .isLength({ min: 5 })
    .withMessage('La identificación del cliente debe tener al menos 5 caracteres'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validarActualizacion = [
  check('detallesCuarto')
    .optional()
    .isLength({ min: 5 })
    .withMessage('El detalle del cuarto debe tener al menos 5 caracteres'),
  check('diasEstadia')
    .optional()
    .isNumeric()
    .withMessage('El campo debe ser numérico')
    .custom((value, { req }) => {
      if (value <= 0) {
        throw new Error('Los días de estadías deben ser de al menos un día');
      }
      return true;
    }),
  check('identificacionCliente')
    .optional()
    .isLength({ min: 5 })
    .withMessage('La identificación del cliente debe tener al menos 5 caracteres'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validarPago = [
  check('nit')
    .exists()
    .withMessage('El nit debe ser especificado')
    .notEmpty()
    .withMessage('El nit no puede estar vacío')
    .isLength({ min: 5 })
    .withMessage('El nit debe tener al menos 5 caracteres'),
  check('razonSocial')
    .exists()
    .withMessage('La razon social debe ser especificada')
    .notEmpty()
    .withMessage('La razon social no puede estar vacía')
    .isLength({ min: 5 })
    .withMessage('La razon social debe tener al menos 5 caracteres'),
  check('metodoPago')
    .exists()
    .withMessage('El método de pago debe ser especificado')
    .notEmpty()
    .withMessage('El método de pago no puede estar vacío'),
  check('montoPagado')
    .exists()
    .withMessage('El mónto deben ser especificado')
    .isNumeric()
    .withMessage('El mónto debe ser numérico')
    .custom((value, { req }) => {
      if (value <= 0) {
        throw new Error('El mónto no puede ser menor o igual a cero');
      }
      return true;
    }),
  check('reservaId')
    .exists()
    .withMessage('El número de reserva debe ser especificado')
    .isNumeric()
    .withMessage('El número de reserva debe ser numérico')
    .custom((value, { req }) => {
      if (value <= 0) {
        throw new Error('El número de reserva debe ser válido');
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validarCreacion, validarActualizacion, validarPago };
