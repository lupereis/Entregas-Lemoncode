console.log("");
console.log("************** CHALLENGES *********************");

// ********************** Ejercicio Acceso en profundidad. Apartado A **********************
console.log (" ---- Retos.2 deep-acces A ---");

const myObject = {
    a: 1,
    b: {
      c: null,
      d: {
        e: 3,
        f: {
          g: "bingo",
        }
      }
    }
};
// La funcion recibe como argumentos por un lado un objeto y por otro, gracias al operador spread, una serie de argumentos indefinidos que representan a las claves del objeto 
const deepGet = (obj,...keys) => {
  // Iteramos por cada clave recibida 
  for (const key of keys) {
    // Si el objeto actual no es un objeto o es un valor null devuelve undefined
    if (typeof obj !== 'object' || obj === null) {
      return undefined;
    }
    // Por cada clave recibida se asigna el valor a obj para la siguiete iteracción
    obj = obj[key];
  }
  // Se retorna el valor encontrado o undefined si no existe esa propiedad
  return obj;
}

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

// ********************** Apartado B **********************
console.log (" ---- Retos.2 deep-acces B ---");

const myObject2 = {};
// La función recibe 3 argumentos: el valor que se va a asignar, un objeto y una cantidad indeterminada de claves o propiedades del objeto
const deepSet = (value, obj, ...keys) => {
  // Si no se reciben claves no se hace nada
  if (keys.length === 0) {
    return;
  }
  // Si solo se recibe una clave se asgina el valor recibido por argumento a dicha clave del objeto
  if (keys.length === 1) {
    obj[keys[0]] = value;
    return;
  }
  // Si el objeto actual no es un objeto o es nulo, se crea un nuevo objeto en esa clave
  if (typeof obj[keys[0]] !== 'object' || obj[keys[0]] === null){
    obj[keys[0]] = {};
  }

  //Se llama recursivamente a la función con el nuevo objeto y las claves restantes
  deepSet(value, obj[keys[0]], ...keys.slice(1));
}



deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));  // Do nothing // {a: 3}