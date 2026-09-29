const datos = ["manzana", "banana", "  ", "manzana", "", "pera", "banana", "   ", "uva", null, undefined];
const datosUnicos = [];

for (let i = 0; i < datos.length; i++) {
  let elemento = datos[i];

  // Si el elemento es un string, quitamos los espacios al inicio y al final
  if (typeof elemento === "string") {
    elemento = elemento.trim();
  }

  // Comprobamos si el elemento no está vacío / nulo
  if (elemento) {
    let yaExiste = false;

    // Verificamos si ya está dentro de nuestro arreglo de datosUnicos
    for (let j = 0; j < datosUnicos.length; j++) {
      if (datosUnicos[j] === elemento) {
        yaExiste = true;
        break;
      }
    }

    // Si no existía previamente, lo agregamos
    if (!yaExiste) {
      datosUnicos.push(elemento);
    } else {
      // Bloque else (opcional o para manejar el caso repetido)
      continue;
    }
  } else {
    // Bloque else para ignorar valores vacíos o espacios
    continue;
  }
}

console.log(datosUnicos);
// Resultado: ["manzana", "banana", "pera", "uva"]