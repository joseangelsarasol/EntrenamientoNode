const fs = require("fs"); // Incluir el modulo (librería) fs ….

var data = fs.readFileSync ('input.txt'); // Leer Fichero texto..
console.log (data.toString()); 
console.log ("Fin del Programa");