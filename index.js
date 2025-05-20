const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal que devuelve nuestro JSON
app.get('/', (req, res) => {
  res.json({ "hola": "SI" });
});

app.get('/otroservicio', (req, res) => {
  res.json({ "hola": "NO" });
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});