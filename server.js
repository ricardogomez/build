var express = require('express');
var app = express();

app.get('/app', function (req, res) {
  res.send('Hola!');
});
app.get('/app/actualizar', function (req, res) {
  res.send('Actualizar!');
});

app.listen(3000)
