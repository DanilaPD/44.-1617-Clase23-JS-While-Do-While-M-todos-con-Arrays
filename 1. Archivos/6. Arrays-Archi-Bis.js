let animales = ["canguro", "camello", "perro", "gato"];
let comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];

//* Unshift
// Agrega al principio, sube el índex de lo demás y retorna el largo:

const unshiftArr = (arr) => arr.unshift("tortuga");

console.log(unshiftArr(animales));
console.log(animales);

//* Splice
// Es un poco distinto.
// Tiene 2 parámetros: "posición" desde la que sacar y "cantidad" que sacar. El tercer parámetro sería con qué reemplaza:

const spliceArr = (a) => a.splice(0, 2);
console.log("Sacó: ", spliceArr(comidas));
console.log("Quedaron: ", comidas);

// Atentos: La "tortuga" la agregué con el "unshift" y se va a acordar:
console.log(animales);
console.log("Sacó: ", spliceArr(animales));
console.log("Quedaron: ", animales);
