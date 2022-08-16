'use strict'

//sin parseint
//sin tostring
//recibe string retorna numero

function BinarioADecimal(num) {
  // tu codigo aca

  //Se transforma el string en un arreglo
  var arregloNum = Array.from(num);
  //Se invierte el arreglo para facilitar la operacion
  var arregloInv = arregloNum.reverse();
  
  var sum = 0;
  var transformado = 0;

  for(var i=0; i<arregloInv.length; i++){
    //se eleva 2 a la posicion en el arreglo, luego se multiplica por el numero
    transformado = (Math.pow(2,i)*Number(arregloInv[i]));
    //se agrega a suma
    sum = sum+transformado;
  }
  return sum;
}

//recibe numero retorna string
function DecimalABinario(num) {
  // tu codigo aca
  var contenedor = [];

  while (num !== 0) {
    //saca el resto del numero
    var residuo = num%2;
    //devuelve el entero mas cercano
    num = Math.floor(num/2);
    //se pasa a un arreglo
    contenedor.push(residuo);
  }
  //se invierte el arreglo
  var fin = contenedor.reverse();
  
  //se declara una variable string para concatenar con los valores
  var bin = ""; 
  for(var i=0; i<fin.length; i++){
    bin=bin+fin[i];
  }
  return bin;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}