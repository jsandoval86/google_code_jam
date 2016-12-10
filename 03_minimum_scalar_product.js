// Hallar el producto minimo escalar de dos conjuntos de datos
// ejemplo:
// a = [1, 5, 6]
// b = [2, 3, 4]
// respuesta: 31

var array1 = [1, 5, 6]
var array2 = [2, 3, 4]
var productoMinimoEscalar = 0

if (array1.length != array2.length) throw new Error('Los arrays deben ser del mismo tamaño')

// ordenar de mayor a menor array1
array1.sort(function (a, b) { return b - a })
// ordenar de menor a mayor array2
array2.sort(function (a, b) { return a - b })

// Multiplicar arreglos
for (var i = 0; i < array1.length; i++) {
  productoMinimoEscalar += array1[i] * array2[i]
}

console.log('Producto Minimo Escalar: ' + productoMinimoEscalar)
