// Fichero: eventos_05.js
var eventos = require('events'); // Incluir librería de Eventos ...
var GestorEventos = eventos.EventEmitter; 
var ee = new GestorEventos(); // creamos un nuevo manejador de eventos

ee.on('datos', function(fecha){ // Escucha del Evento ‘datos’
            console.log(fecha); 
}); 

setInterval (function(){ 
        var fecha = new Date(); 
        var result = fecha.toUTCString();
// Convertir el numero de milisegundos en fecha string
ee.emit('datos', result ); // Emitir un evento con paso de información
}, 500);
