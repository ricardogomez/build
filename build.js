var shell = require('shelljs')
var path = require('path')
var builder = require('.')({})

console.log('Building:', builder.source())
builder.build(function (err) {
  if (err) throw err
  var src = path.join(__dirname, '../content/imagenes')
  var dest = path.join(__dirname, '../site/imagenes')
  shell.ln('-s', src, dest)
  console.log('Done:', builder.destination())
})
