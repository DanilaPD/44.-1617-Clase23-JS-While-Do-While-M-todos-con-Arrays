const comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];

const animales = ["canguro", "camello", "perro", "gato"];

// Quitar el último y retornarlo:
const popArr = (a) => a.pop();

// No podría hacer esto (reasignar):
//* comidas = ["sarasa", "sarasita"]

// Pero sí puedo aplicarle "métodos":

console.log(popArr(comidas)); // "Pop" nos retorna lo que sacó.

console.log(comidas); // Acá ya pueden ver que el último no está.

console.log(popArr(animales));

console.log(comidas.pop());

// Versión "function":

function popArr1(a) {
  return a.pop();
}

//* console.log(popArr1(comidas));
