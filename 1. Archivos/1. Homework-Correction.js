//* 2

for (let i = 0; i < 40; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Cortocircuito:
// (Condición) && (ejecuta si es "true"):
for (let j = 0; j < 40; j++) {
  j % 3 === 0 && console.log(j);
}

// También lo podríamos haber hecho con un "if ternario":
// Condición ? ejecuta si es "true" : ejecuta si es "false".

//* 5

const aDeletrear = "nucba";

for (let k = 0; k < aDeletrear.length; k++) {
  const deletreado = aDeletrear[k];
  console.log(deletreado + ", ");
}
