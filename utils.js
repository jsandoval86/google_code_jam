/**
* function to reverse order of a Array
* @method reverseOrder
* @param {Array} array - Array to reverse order
* @return {Array}
*/
function reverseOrder (array) {
  var auxArray = []
  for (var indice in array) {
    auxArray[indice] = array[(array.length - 1) - indice]
  }
  return auxArray
}

// alfabeto t9Spelling
const alfabeto = {
  a: '2',
  b: '22',
  c: '222',
  d: '3',
  e: '33',
  f: '333',
  g: '4',
  h: '44',
  i: '444',
  j: '5',
  k: '55',
  l: '555',
  m: '6',
  n: '66',
  o: '666',
  p: '7',
  q: '77',
  r: '777',
  s: '7777',
  t: '8',
  u: '88',
  v: '888',
  w: '9',
  x: '99',
  y: '999',
  z: '9999',
  ' ': '0'
}
/**
* Metodo retorna el t9 spelling de un texto
* @method t9Spelling
* @param {String} text - Cualquier cadena de texto
* @return {String}
*/
function t9Spelling (text) {
  text = text.toLowerCase()

  // Codigo de teclas
  var t9Spelling = ''

  for (var i = 0; i < text.length; i++) {
    var tecla = alfabeto[text[i]]

    if (i != 0) {
      var teclaPrevia = alfabeto[text[i - 1]][0]

      // Si hay espacio agregar 0
      if (text[i] == '0') tecla = '0'

      // Si se repite tecla imprimir espacio
      if (teclaPrevia == tecla[0]) t9Spelling += ' '
    }

    // concatenar tecla a codigo
    t9Spelling += tecla
  }
  return t9Spelling
}

module.exports = {
  reverseOrder,
t9Spelling}
