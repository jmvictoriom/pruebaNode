const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal que devuelve nuestro JSON
app.get('/', (req, res) => {
  res.json({ "hola": "SI" });
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});