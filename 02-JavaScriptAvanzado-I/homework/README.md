
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

-las variables no declaradas son siempre globales.
-las variables declaradas son creadas antes de ejecutar cualquier otro codigo, las sin declarar no existen hasta que el codigo que las asigna se ejecuta.
-las variables sin declarar son configurables, las declaradas no

```javascript
x = 1;
var a = 5;
var b = 10;

var c = function(a, b, c) { //(8,9,10)
  var x = 10;
  console.log(x);//mostrará x=10
  console.log(a);//mostrará a=5
  var f = function(a, b, c) { //(8,9,10)
    b = a;//cambia en global b=5
    console.log(b);// b=5
    b = c; //b=c=10 en global
    var x = 5; //x=5
  }
  f(a,b,c);
  console.log(b);
}

c(8,9,10); //c-console.log(x)=10; 
//c-console.log(a)=5; f-console.log(b)=5
//console.log(b)=10 
console.log(b); //mostrará b=10
console.log(x); //mostrará x=1
```



```javascript
console.log(bar); // 1
console.log(baz); // 2
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
//foo-console.log()= Hola!
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

//console.log(instructor)=Tony
```

```javascript
var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);//Franco
   }
})();
console.log(instructor);//Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//The Flash
    console.log(pm);//Reverse Flash
}
console.log(instructor);//Tony
console.log(pm);//Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //
"4" - 2 //2
"4px" - 2 //Nan
7 / 0 // infinito
{}[0] // Array[o]
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10]//23
3>2>1 //false
[] == ![]// true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefined
   console.log(foo());//2

   var a = 1;
   function foo() {
      return 2;
   }
}
//undefined es el primer console porque a esta definida mas abajo y en contexto de la funcion test
//2 porque imprime lo que retorna la funcion foo al llamar a test
test();
```

Y el de este código? :

```javascript
//var snack = 'Meow Mix';

function getFood(food) {
  var snack = 'Meow Mix'; 
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}
//en hoisting snack esta en contexto de getFood, y su uso tambien, por lo que queda undefined al ser food false.
getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//Aurelio De Rosa ya que this.fullname en prop cambia su valor referido a obj
//Juan Perez ya que hace referencia al valor global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
//resultado seria 1,4,3...2, por el orden en que se ejecutan las funciones, que ademas, tiene  otras funciones que se ejecutan cuando termina con las anteriores.
```
