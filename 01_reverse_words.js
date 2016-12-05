// Leer un archivo, con cada linea armar un array e invertirlo.
// ejemplo:
// input: data.txt
// Hola como estan todos
// output : stdout
// todos estan como Hola

const fs = require('fs')
const readLine = require('readline')
const utils = require('./utils')

var lines = 1

// leer archivo linea a linea
const rl = readLine.createInterface({
  input: fs.createReadStream('./files/01.txt')
})

// Cuando lea una linea
rl.on('line', function (line) {
  // armar Array con la linea
  var lineArray = line.split(' ')
  // revertir el orden del Array
  var reverseArray = utils.reverseOrder(lineArray)

  // salida por consola
  console.log('Case #' + lines + ': ' + reverseArray.join(' '))
  lines++
})
