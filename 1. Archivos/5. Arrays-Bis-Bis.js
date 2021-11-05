let animales = ["canguro", "camello", "perro", "gato"];
let comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];

//* Push
// Agrega al final y retorna el nuevo largo.
const pushArr = (arr) => arr.push("queso");

console.log(pushArr(comidas));

console.log(comidas);

// Pasando todo como "parámetro":
const arrToPush = (a, b) => console.log(a.push(b));

arrToPush(comidas, "queso");

console.log(comidas);

//* Shift
// Saca el primero (como un "pop" al revés). Además le baja el índex al resto del "array":
const shiftArr = (arr) => arr.shift();
console.log(shiftArr(animales));
console.log(animales[0]);
// Antes en 0 estaba "canguro", ahora está "camello". Con [num] me va a traer lo que esté en ese número de posición.
