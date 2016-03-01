'use strict'

module.exports = function (options) {
  return function (files, metalsmith, done) {
    var urlFile = files['portada.txt']
    var indexFile = files['index.html']
    if (urlFile && indexFile) {
      var url = urlFile.contents.toString().replace('\n', '')
      var index = indexFile.contents.toString().replace('{{image}}', url)
      indexFile.contents = new Buffer(index)
    }
    done()
  }

}
