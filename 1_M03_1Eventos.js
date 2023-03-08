/// Ejemplo de eventos



var eventos = require('events');
var evento = new eventos.EventEmitter();
 

//Esta función es la que recoje el evento que lo reconoce con la etiqueta evento1 y muetra la carga texto contenida en data
evento.on('evento1', function (data){

    console.log('subscriptor1: ' + data);

});

// Esta función evento.emit es la que genera el evento cuya carga es un texto
evento.emit('evento1', 'Este es mi primer ejemplo de eventos con Event_emitter');
