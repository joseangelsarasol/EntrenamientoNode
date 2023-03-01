



///----------------------------------Promesa 1

 let p = new Promise(function(resolve, reject){

 let a = 3*4;
         if(a>10){ 
             resolve(a);
         }else{
             reject("Error");
         }
 
 });

 p.then(function(mensaje){
    
     console.log(mensaje);
 }).catch(function (error){

     console.log(error);
 });
//------------------------------------------------------------------------------
const pp = (a, b) =>{

    let n = a*b;
    return n;

};
const result = pp(5,5);
console.log(result);