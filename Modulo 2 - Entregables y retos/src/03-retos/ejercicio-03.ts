console.log("");
console.log("************** CHALLENGES *********************");

// ********************** Ejercicio Aplanando Arrays. Apartado A **********************
console.log (" ---- Retos.3 flatten-array A ---");

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

// Función de aplanamiento que recibe un array y un acumulador vacío útil para usar la recursividad
const flattenArray = (array, acc) => {
    for (const arr of array) {
        // Si el item no es un array incorporamos su valor al array acumulativo
        if (!Array.isArray(arr)) {
            acc.push(arr);
        } else {
        // Si el item es un array se vuelve a invocar recursivamente hasta que no lo sea, en ese momento se añaden los valores al array acumulativo    
            flattenArray(arr,acc);
        }
    }
    return acc;
}

console.log(flattenArray(sample, []));

// ********************** Apartado B **********************
console.log (" ---- Retos.3 flatten-array B (Typed) ---");

//Para tipar el array multidimensional de varios niveles de profundidad se crea un tipo que puede ser un valor de tipo genérico o un tipo recursivo con el valor de NestedArray
type NestedArray<T> = T | NestedArray<T>[];
// Se tipa el array con el tipo NestedArray creado
const typedSample: NestedArray<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];


const typedFlattenArray = (array: any[], acc: number[] = []): number[] => {
    for (const arr of array) {
        if (!Array.isArray(arr)) {
            acc.push(arr);
        } else {
            typedFlattenArray(arr,acc);
        }
    }
    return acc;
}

console.log(typedFlattenArray(typedSample, []));