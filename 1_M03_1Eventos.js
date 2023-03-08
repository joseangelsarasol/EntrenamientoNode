/// Ejemplo de eventos



var eventos = require('events');

var evento = new eventos.EventEmitter();
 
evento.on('evento1', function (data){

console.log('subscriptor1: ' + data);



});


evento.emit('evento1', 'Este es mi primer ejemplo de eventos con Event_emitter');
