var shell = require('shelljs')
var builder = require('.')({})

console.log('Building:', builder.source())
// shell.rm('../site/imagenes')
builder.build(function (err) {
  if (err) throw err
  console.log('Done:', builder.destination())
})
