console.log("");
console.log("************** CHALLENGES *********************");

// ********************** Cuestion 1. **********************
console.log (" ---- Retos.6 Cuestion 1 ---");
/*
¿Existe alguna forma de que la expresión `x === x` de como resultado `false`?
-> Hay una forma y es cuando el valor de la variable es NaN ya que no se puede comparar que el motivo que los ha originado sea el mismo
*/
let x = NaN;

console.log(x === x); // false


// ********************** Cuestion 2. **********************
console.log (" ---- Retos.6 Cuestion 2 ---");
/*
Habiendo resuelto la **Cuestión l**, ¿como implementarías una función que compruebe si un determinado valor es `NaN`?
-> Recurriendo a la función Number.isNaN() determinamos cuando el valor recibido es realmente un NaN
*/
let isNaNValue = v => Number.isNaN(v);

console.log(isNaNValue(NaN)); // true


// ********************** Cuestion 3. **********************
console.log (" ---- Retos.6 Cuestion 3 ---");
/*
Habiendo resuelto la **Cuestion 2** ¿Existe alguna forma de que la expresión `!isNaNValue(x) && x !== x` de como resultado `true`?
->Negando la afirmación establecida en la funcion anterior conseguimos que el resultado de la primera comparación sea true, el resultado de la segunda
comparación será automaticamente true cuando el valor establecido para x sea NaN: NaN es distinto de NaN como vimos en el primer ejercicio
*/
isNaNValue = v => !Number.isNaN(v);

console.log(!isNaNValue(x) && x !== x); // true


// ********************** Cuestion 4. **********************
console.log (" ---- Retos.6 Cuestion 4 ---");
/*
¿Podrías dar con alguna forma de que la expresión `x + 1 === x - 1` arroje `true`?
-> Mediante el valor Infinity se puede conseguir ya que tanto 'Infinity + 1' como 'Infinity - 1' dan como resultado Infinity 
*/

x = Infinity;

console.log(x + 1 === x - 1); // true


// ********************** Cuestion 5. **********************
console.log (" ---- Retos.6 Cuestion 5 ---");
/*
Se te ocurre alguna forma de hacer que la expresión `y > y` de como resultado `true`?
-> Podría recurrir a que 'y' devuelva el valor de una funcion donde, a partir de una variable previa de comprobación establecida en true,
en primer lugar comprobemos si existe y en ese caso retornamos el valor 1 y cambiamos el valor de la variable de comprobación a false,
cuando vuelva a entrar para calcular el segundo valor comparativo de 'y' la variable de comprobación es false por lo que pasa directamente
a retornar el valor 0. --> 1 > 0
*/
let comp = true;

let y = {
  valueOf: function() {
    if (comp) {
      comp = false;
      return 1;
    } else { 
      return 0;
    }
  }
};

console.log(y > y); // true