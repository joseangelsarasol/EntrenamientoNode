
/**
 * Este es un ejmplo de aprendizaje
 */

class operations{


    constructor(op1, op2){
    // Variable comunnes
    this.op1;
    this.op2;
    globalThis;

    this.usuario = {
            nombre: 'Pepe',
            Edad: 9,
            contacto:{
                direccion: 'Jesus Medinaceli',
                correo: 'j.angeltrabajo@gmail.com'
            }

        }

    this.miarray = new Array();
    //this.personas = new Array(40);

    this.personas = new Array();
   
    //this.longitud = this.personas.length; 
    this.sistemaSolar = new Array();

    this.obj = { // OBJETOS …
        prop1: 'I’m',
        prop2: 'an',
        prop3: 'object'
        }
        


//return op1 * op2;

}

 vector(){




 }
//-----------------------------------------------------------------------------------------
async ParImpr(){

for (let i = 0; i<10; i++){

    if(i%2){ console.log('El número  '+i+'   es par.');
        }else{
             console.log('El número  '+i+' es impar.');
        }
}              }
//-----------------------------------------------------------------------------------------
// Fichero: console_file01.js
consola (){
console.clear(); // borrar pantalla…




console.log ('Consola de Registro');
console.info ('Consola de Informacion');
console.debug ('Console de Depuracion');
console.warn ('Consola de Aviso');
console.error ('Consola de Error');
}


one() {

      console.time();}
}




//let opera1 = new operations(2, 4).ParImpr();
//1 let opera = new operations(2,4).ParImpr();
//let consola = new operations().consola();
//let con = new operations().usuario;
let con = new operations().obj;
//con[53] = "Irene Sáinz Veiga";

console.table(con);
//consola.log(con);
//-------------------------------------------------------------------------

// -- >     npm install --save-dev jsdoc

// npx jsdoc --configure ./node_modules/jsdoc/conf.json

//--------------------------------------------------------------------------