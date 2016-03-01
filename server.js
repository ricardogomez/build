var express = require('express');
var path = require('path')
var git = require('simple-git')
var shell = require('shelljs')
var builder = require('.')()

var app = express();

app.get('/app', function (req, res) {
  res.send('Hola!');
});
app.get('/app/actualizar', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Actualizando...\n')
  res.write('descargando cambios...\n')
  var repo = git(path.join(__dirname, '../content'))
  repo.pull(function (err, update) {
    if (err) {
      res.write('Error: ' + err)
      res.end()
      return
    }
    res.write(JSON.stringify(update.files, null, 2))
    res.write('\ngenerando contenido...\n')
    builder.build(function (err) {
      if (err) {
        res.write('Error: ' + err)
        res.end()
        return
      }
      var src = path.join(__dirname, '../content/imagenes')
      var dest = path.join(__dirname, '../site/imagenes')
      shell.ln('-s', src, dest)
      res.write('Actualizado.')
      res.end()
    })
  })
});

app.listen(3000, function () {
  console.log('Server listening port 3000')
})
