console.log("");
console.log("************** CHALLENGES *********************");

// ********************** Ejercicio Memoization. Apartado A **********************
console.log (" ---- Retos.4 memoization A ---");

// Se define un tipo genérico para funciones que no reciben argumentos y se devuelve un valor genérico T
type functionWithoutArgs<T> = () => T;

const expensiveFunction: functionWithoutArgs<number> = () => {
  console.log("Una única llamada");
  return 3.1415;
}

const memoize = <T>(fn: functionWithoutArgs<T>): functionWithoutArgs<T> => {
  // Se crea una variable 'cache' genérica y un booleano 'called' con valor inicial false
  let cache: T;
  let called: boolean = false;

  // Memoize retorna el valor de la función recibida como parámetro
  return ():T => {
    // Si 'called' es false se guarda en la variable 'cache' el valor de la función y se establece 'called' como true
    // La primera vez que se llame a la función entrará siempre ya que 'called' sólo cambia su valor una vez que la función ha sido ejecutada
    if(!called) {
      cache = fn();
      called = true;
    }
    // Si la función ya ha sido llamada otras veces recupera el valor almacenado en 'cache' sin ejecutar nuevamente la función
    return cache;
  };
}

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415


// ********************** Apartado B **********************
console.log (" ---- Retos.4 memoization B ---");


const memoize2 = <T>(fn: functionWithoutArgs<T>): functionWithoutArgs<T> => {
  let cache: T, called: boolean = false;
  return (): T => !called ? (called = true, cache = fn()) : cache;

}

const memoized2 = memoize2(expensiveFunction);
console.log(memoized2()); // Una única llamada // 3.1415
console.log(memoized2()); // 3.1415
console.log(memoized2()); // 3.1415


// ********************** Apartado C **********************
console.log (" ---- Retos.4 memoization C ---");

// Se define un tipo para funciones que aceptan una lista de argumentos primitivos (string, number o booleano)
type functionWithArgs<T> = (...args:(string | number | boolean)[]) => T;

let count:  number = 0;
const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())

// Se llama a la función con el tipo creado para la misma
const memoize3 = <T>(fn: functionWithArgs<T>): functionWithArgs<T> => {
  // En la variable 'cache' se usa un map para guardar los resultados de las llamadas según los argumentos recibidos
  let cache= new Map<string, T>();

  return (...args: (string | number | boolean)[]): T => {
    // Se crea una clave única basada en los argumentos recibidos
    const key = JSON.stringify(args);
    // Se comprueba si la clave está en 'cache', en caso positivo se devuelve el valor almacenado sin tener que ejecutar nuevamente la función
    if (cache.has(key)) {
      return cache.get(key);
    }
    // Si la clave no está en 'cache' se llama a la función original guardando el resultado en 'cache' y se devuelve dicho resultado
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
};


const memoizedGreet = memoize3(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2