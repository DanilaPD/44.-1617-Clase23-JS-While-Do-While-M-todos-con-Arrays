//* While:

let num1 = 0;

while (num1 <= 10) {
  console.log("Con While: ", num1);
  num1++;
}

//* Do-While:

let num2 = 0;

do {
  console.log("Con Do-While: ", num2);
  num2++;
} while (num2 <= 10);

//* But:

let num3 = 15;

// Acá primero chequea y solo ejecuta si es "true":
while (num3 <= 10) {
  console.log("Con While v2: ", num3);
  num3++;
}

let num4 = 15;

// Acá primero dispara y después hace preguntas:
do {
  console.log("Con Do-While v2: ", num4);
  num4++;
} while (num4 <= 10);

//! For... of
// No se usan demasiado:
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of
