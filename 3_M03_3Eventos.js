var eventos = require('events');
var eventoAemitir = new eventos.EventEmitter();


var manejadorConexiones = function conectado(){

console.log('Conexión conectada');
eventoAemitir.emit('data_received');


}
///------------------------------------------









//


eventoAemitir.emit('connection');
