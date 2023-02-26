
/**
 * Este es un ejmplo de aprendizaje
 */

class operations{


    constructor(op1, op2){

    this.op1;
    this.op2;
    globalThis;

return op1 * op2;

}

async ParImpr(){

for (let i = 0; i<10; i++){

    if(i%2){ console.log('El número  '+i+'   es par.');
        }else{
             console.log('El número  '+i+' es impar.');
        }
}              }

}

//let opera1 = new operations(2, 4).ParImpr();
let opera = new operations(2,4).ParImpr();
console.log(opera);
//-------------------------------------------------------------------------

// -- >     npm install --save-dev jsdoc

// npx jsdoc --configure ./node_modules/jsdoc/conf.json

//--------------------------------------------------------------------------