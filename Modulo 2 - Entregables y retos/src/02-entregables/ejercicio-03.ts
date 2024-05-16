console.log("");
console.log("************** DELIVERABLE 03 *********************");


// ********************** Ejercicio Clone **********************
console.log (" ---- 03.1 Clone ---");

const notObject: string = "El argumento recibido no es un objeto";
const prueba: string = "Hola";

interface Person {
    name: string;
    surname?: string;
    age: number;
    married?: boolean;
    hair?: string;
    address?: Address;
}

interface Address {
    street: string;
    zipCode?: number;
    city: string;
}

const luis: Person = {
    name: "Luis",
    surname: "Pérez",
    age:42,
    address: {
        street: "La Alberca",
        city: "Sevilla",
    }
};

function clone (source: object): object {
    if (typeof source === "object") {
        let clonedObject: object = {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)){
                clonedObject[prop] = source[prop];
            }
        }
        return clonedObject;
    } else {
        throw new TypeError (notObject);
    }
}

try {
    const luisClone: object = clone(luis);
    console.log(luisClone);
} catch (excepcion) {
    console.log(excepcion);
}

// ********************** Ejercicio Merge **********************
console.log (" ---- 03.2 Merge ---");

const maria: Person = {
    name: "María",
    age:40,
    married:true,
    hair: "blonde",
};

function merge (source: object, target: object): object {
    if (typeof source === "object") {
        return {...target, ...source};
    } else {
        throw new TypeError (notObject);
    }
}

try {   
    console.log(merge(luis, maria));
} catch (excepcion) {
    console.log(excepcion);
}