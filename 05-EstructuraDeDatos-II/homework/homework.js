"use strict";

const { prototype } = require("@11ty/eleventy");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor,
  al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this._length = 0;
  //this.tail = null;
  this.head = null; //el que empieza la lista
}

function Node(value) {
  this.value = value;
  this.next = null;
}
LinkedList.prototype.remove = function(){
  if(this._length===0){
    return null;
  }
  if(this._length===1){
    var a = this.head.value;
    this.head=null;
    this._length--;
    //this.tail = null;
    return a;
  }
  var act = this.head;
  var prev = null;
  while(act.next){
    prev = act;
    var a = prev.next.value;
    act = act.next;
  }
  prev.next=null;
  this._length--;
  //this.tail = prev;
  return a;
}

LinkedList.prototype.add = function(value){
  var node = new Node(value);
  var act = this.head;
  if(!act){
    this.head = node;
    this._length++;
    return node;
  }
  while(act.next){
    act = act.next;
  }
  act.next = node;
  this._length++;
  return node;
}

LinkedList.prototype.search = function(value){
  if (this._length === 0) {
    return null;
  }
  let current = this.head;
  if (typeof value === "function") { 
    // linkedList.add('one');
    // linkedList.add('two');
    // linkedList LinkedList {head: Node { value: "one", next: Node { value: "two", 
    // next: null } },_length: 2}
    // function(nodeValue) {return nodeValue === 'two';}'two' === 'two'
    while (current) {
      if (value(current.value)) {
        return current.value;
      }
      current = current.next;
    }
  } else {
    while (current) {
      if (current.value === value) {
        return current.value;
      }
      current = current.next; // this.head.next.next.next
    }
  }
  return null;
};



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros;
es decir, posiciones posibles para almacenar la información),
donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35).
(Luego de haber pasado todos los tests, a modo de ejercicio adicional,
  pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato.
  Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings)
  y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que 
  se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, 
  y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear,
con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'),
se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable{
  constructor(numBuckets){
    this.numBuckets = 35;
    this.buckets = [];
  }
  hash(key){
    var suma=0;
    for(var i=0; i<key.length; i++){
      suma = suma + key.charCodeAt(i);
    }
    return suma % this.numBuckets;
  }
  set(key, value){
    if (typeof (key)!= "string"){
      throw new TypeError('Keys must be strings');
    }
    var ind = this.hash(key);
    if(this.buckets[ind]==undefined){
      this.buckets[ind] = {};
    }
    this.buckets[ind][key]=value;
  }
  get(key){
    var ind = this.hash(key);
    //return this.buckets[ind][key];
    if ( this.buckets[ind][key]){
      return this.buckets[ind][key];
    }
  }
  hasKey(key){
    var ind = this.hash(key);
    //return this.buckets[ind].hasOwnProperty(key);
    if(this.buckets[ind][key]){
      return true;
    }
    else{
      return false;
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
