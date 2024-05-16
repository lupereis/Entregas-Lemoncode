console.log("");
console.log("************** DELIVERABLE 02 *********************");

// ********************** Ejercicio  **********************
console.log (" ---- 02.1 Concat ---");

const extremadura : Array<string> =  ["Cáceres", "Badajoz"];
const aragon : Array<string> = ["Huesca", "Zaragoza", "Teruel"];
const galicia : Array<string> = ["Lugo", "Pontevedra", "Orense", "La Coruña"];

const notArray2 : string = "Alguno de los argumentos introducidos en la función no es un array";

const concat = <T> (a: T[], b: T[]) : T[]=> {
    // Se comprueba que los argumentos introducidos son arrays, en caso contrario se devuelve un error
    if (Array.isArray(a) && Array.isArray(b)) {
        return [...a, ...b];
    } else {
        throw new TypeError(notArray);
    }
}

try {
    console.log(concat(extremadura, aragon));
} catch (excepcion) {
    console.log(excepcion);
}


// ********************** Ejercicio Opcional **********************
console.log (" ---- 02.2 Concat Optional ---");

const concatOptional = <T> (...arrays: T[][]) : T[] => {
    // Gracias al operador spread se recogen todos los arrays en uno nombrado "arrays"
    // Por cada elemento recibido se comprueba que son arrays, en caso contrario se devuelve un error
    arrays.forEach((arr) => {
        if(!Array.isArray(arr)) {
            throw new TypeError(notArray2);
        }
    });
    // Con el método reduce se concatenan todos los arrays en uno
    return arrays.reduce((acc: T[], arr: T[]) => [...acc, ...arr], []);
}

try {
    console.log (concatOptional(extremadura, aragon, galicia));
} catch (excepcion) {
    console.log(excepcion);
}