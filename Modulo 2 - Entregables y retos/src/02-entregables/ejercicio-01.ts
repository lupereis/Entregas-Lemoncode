console.log("************** DELIVERABLE 01 *********************");

// ********************** Ejercicio 1.1_Función head **********************
console.log (" ---- 01.1 Funcion head ---");

const original: Array<string> = ["Jaén","Córdoba", "Sevilla", "Huelva", "Cádiz"];
const original2: Array<string> = ["Jaén"];
const original3: Array<string> = [];
const original4: string = "Hellow";

const notArray = "La variable introducida en la función no es un array";
const emptyArray = "El array está vacío";

//Función Alternativa de head usando un acceso simple al primer elemento
// En este caso, al no modificar la función el array de entrada, la función es inmutable
const headAlt = <T> (list: T[]): T => {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            return list[0];
        } else {
            throw RangeError(emptyArray);
        }
    } else {
        throw new TypeError(notArray);
    }
}

try {  
    console.log(headAlt(original));
} catch (exception) {
    console.log(exception);
}


//Función head usando destructuring para acceder al primer elemento
const head = <T> (list: T[]): T => {
    //Se comprueba si la variable que se pasa como argumento es un array, en caso contrario lanza una excepción con el error
    if (Array.isArray(list)) {
        //Se comprueba que el array tenga al menos un elemento, en caso contrario lanza una excepción indicando que el array está vacío
        if (list.length > 0 ) {
            const [first] = list;
            return first;
        } else {
            throw RangeError(emptyArray);
        }
    } else {
        throw TypeError(notArray);
    }
}

try {
    console.log(head(original));
} catch (exception) {
    console.log(exception);
}



// ********************** Ejercicio 1.2_Función Tail **********************
console.log (" ---- 01.2 Funcion Tail ---");

const tail = <T> (list: T[]): T[] => {
    //Se comprueba si la variable que se pasa como argumento es un array, en caso contrario lanza una excepción con el error
    if (Array.isArray(list)) {
        //Se comprueba que el array tenga más de un elemento, en caso contrario lanza una excepción según tenga un elemento o esté vacío
        if (list.length > 1) {
            const [first, ...rest] = list;
            return rest;
        } else {
            throw RangeError (list.length === 1 ? `El array sólo tiene un elemento: ${list[0]}` : emptyArray);
        }
    } else {
        throw TypeError(notArray);
    }
}

try {
    console.log(tail(original));
} catch (exception) {
    console.log(exception);
}

// ********************** Ejercicio 1.3_Función Init **********************
console.log (" ---- 01.3 Función Init ---");

const init = <T> (list: T[]): T[] => {
    //Se comprueba si la variable que se pasa como argumento es un array, en caso contrario devuelve un mensaje avisando del error
    if (Array.isArray(list)) {
        //Se comprueba que el array tenga más de un elemento para devolver todos menos el último, en caso contrario la función lanzará un aviso de que el array sólo tiene un elemento o está vacío
        if (list.length > 1) {
            return list.slice(0, list.length -1);
        } else {
            throw RangeError (list.length === 1 ? `El array sólo tiene un elemento: ${list[0]}, por lo que devolvería un array vacío` : emptyArray);
        }
    } else {
        throw TypeError(notArray);
    }   
}

try {
    console.log(init(original));
} catch (excepcion) {
    console.log(excepcion);
}


// ********************** Ejercicio 1.4_Función Last **********************
console.log (" ---- 01.4 Función Last ---");

const last = <T> (list: T[]): T => {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            return list[list.length - 1];
        } else{
            throw new RangeError(emptyArray);
        }
    } else {
        throw new TypeError(notArray);
    }
}

try {
    console.log(last(original));
} catch (excepcion) {
    console.log(excepcion);
}