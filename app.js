const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use('/', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error en el servidor' });
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
