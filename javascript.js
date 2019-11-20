console.log("Ejercicio Array 001");
//Dado el array playlistFoo, mostrar en consola la canción que está en segundo y quinto lugar.
// playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood']
let playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

console.log(`Canción en segundo lugar: ${playlistFoo[1]}
Canción en quinto lugar: ${playlistFoo[4]}`);

console.log(`

Ejercicio Array 002`);
// Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 10).

// Guardar en variables el valor del primer, tercer y sexto elemento del array.

// Mostrar por consola los siguientes 3 mensajes:

// La banda en primer lugar es: [NOMBRE_DE_LA_PRIMER_BANDA]
// La banda en tercer lugar es: [NOMBRE_DE_LA_TERCER_BANDA]
// La banda en sexto lugar es: [NOMBRE_DE_LA_SEXTA_BANDA]
let bandas = ['Mötley Crew', 'Skid Row', 'Metallica', 'Bon Jovi', 'La Renga', 'The Police', 'The Verb', 'Soundgarden', 'Lenny Kravitz', 'Mintaka'];
let primerLugar = bandas[0];
let tercerLugar = bandas[2];
let sextoLugar = bandas[5];
console.log(`La banda en el primer lugar es ${primerLugar}.
La banda en el tercer lugar es ${tercerLugar}.
La banda en el sexto lugar es ${sextoLugar}.`);

console.log(`

Ejercicio Array 005`);
// Declarar un array vacio con el nombre alumnas
// Asignar el nombre de una alumna en los ínidices: 0, 1, 2, 3, 4 y 5
// Mostrar en consola cada uno de los elementos utilizando los índices dados
// Ejemplo de formato de salida:
// índice 0: Ada
// índice 1: Grace
// índice 2: Radia
// índice 3: Janie
// índice 4: Sheryl
// índice 5: Hedy

let alumnas = [];
alumnas = ['Ada', 'Grace', 'Radia', 'Janie', 'Sheryl', 'Heidy'];
console.log(`Índice 0: ${alumnas[0]}
Índice 1: ${alumnas[1]}
Índice 2: ${alumnas[2]}
Índice 3: ${alumnas[3]}
Índice 4: ${alumnas[4]}
Índice 5: ${alumnas[5]}`);

console.log(`

Ejercicio Array 008`);
// Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
// Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
// Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
// Mostrar en consola la cantidad de etiquetas guardadas en el array

let etiquetasHTML = ['section', 'form', 'div', 'footer', 'header', 'nav', 'article', 'img', 'a', 'body'];

console.log(`La segunda etiqueta es ${etiquetasHTML[1].toUpperCase()}, en mayúsculas.
La quinta etiqueta es ${etiquetasHTML[4].toLowerCase()}, en minúsculas.
La cantidad total de etiquetas es ${etiquetasHTML.length}.
`);


console.log(`

Ejercicio Array 009`);
// Teniendo el array ganadorasRupaul, mostrar en consola el nombre de la primer y última ganadora.
// Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica como si no supieramos la cantidad exacta de elementos
// var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

let ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

console.log(`La primera ganadora de la lista es ${ganadorasRupaul[0]}.
La última ganadora de la lista es ${ganadorasRupaul[ganadorasRupaul.length-1]}.`);


console.log(`

Ejercicio Array 010`);
// Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array playlistNirvana tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array playlistFoo tiene más elementos.
// var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
// var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

let playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
let playlistFoo1 = ['Everlong', 'The Pretender', 'Learn to Fly'];

if (playlistNirvana.length > playlistFoo1.length) {
  console.log(`La playlist de Nirvana tiene más elementos.`)
}
else {
  console.log(`La playlist de Foo Fighters tiene más elementos.`)
}