const alumnos = ["Yves", "Exequiel", "Matias", "Danila", "Drazen"];

const cambiandoAlumnos = (arr) => {
  arr.shift(); // Saca del principio.
  arr.unshift("Leonardo"); // Agrega al principio.
  arr.push("Yves"); // Agrega al final.
  console.log(arr); // No necesita "return" porque pusimos "console.log".
};

cambiandoAlumnos(alumnos);
