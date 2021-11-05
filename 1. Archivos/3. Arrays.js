//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
//* https://www.w3schools.com/js/js_array_methods.asp

const animales = ["canguro", "camello", "perro", "gato"];
const comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];

//* console.log(comidas)
// Acá es un "array".

//* Métodos:

// Convertirlo a "string":

// La "a" es como un placeholder. Es el "alias" del "array" que van a pasar; pueden pasarle cualquier array que quieran.
const arrToString = (a) => console.log(a.toString());

//* arrToString(animales);
//* arrToString(comidas);

// Si fuera con una función "tradicional", lo escribiríamos así:
function arrToString2(a) {
  console.log(a.toString());

  //* arrToString2(animales);
  //* arrToString2(comidas);
}

// A "string", pero con un caracter de separación "custom". En mi opinión, es mejor:
// La flecha en una sola línea tiene el "return" implícito.
const arrJoin = (a) => a.join(", ");

//* console.log(arrJoin(comidas));
// Acá es un "string".

// Este va a dar "undefined".
function arrJoin2(a) {
  a.join(", ");
}

console.log(arrJoin2(animales)); // Sin "return" da "undefined".

// Así lo corregimos:
function arrJoin3(a) {
  return a.join(", ");
}

console.log(arrJoin3(animales));

// Con flecha, puede fallar también. Si es multilínea, es decir, cuando tiene las {}, ahí requiere el "return":

const arrJoin4 = (a) => {
  a.join(", ");
};

console.log(arrJoin4(comidas));

// Para hacer que funcione, ponemos el "return":

const arrJoin5 = (a) => {
  return a.join(", ");
};

console.log(arrJoin5(comidas));
