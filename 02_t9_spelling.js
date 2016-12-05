const fs = require('fs')
const readLine = require('readline')
const utils = require('./utils')

// leer archivo linea a linea
const rl = readLine.createInterface({
  input: fs.createReadStream('./files/02.txt')
})

// Cuando lea una linea
rl.on('line', function (line) {
  // obtener codigo
  var t9Spelling = utils.t9Spelling(line)
  // imprimit texto
  console.log(line)
  // imprimir codigo del texto
  console.log(t9Spelling)
})
