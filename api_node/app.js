const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Node funcionando' });
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));