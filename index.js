//Alumno: González Oviedo Tomás Emiliano

import { Potencia } from "./Potencia.js";

let continua = true;
let input = prompt(
  `Por favor, elegí un número entero del 1 al 10 y te encuentro las potencias: 1 a la 5\nEscriba: "salir" para parar la ejecución.`
);

const validar = (input, continua) => {
  if (isNaN(input)) {
    continua = false;
    alert(`Lo lamento, su input no es valido.`);
  }

  if (parseInt(Number(input)) > 10) {
    continua = false;
    alert(`Lo lamento, su número debe ser menor a 10.`);
  }

  if (parseInt(Number(input)) <= 0) {
    continua = false;
    alert(`Lo lamento, su número debe ser mayor a 0.`);
  }

  return continua;
};

const calcular = (input, i) => {
  let potencia = 0;

  potencia = parseInt(Number(input)) ** i;

  return potencia;
};

const salir = (input) => {
  let esSalida = false;
  if (input.toLowerCase() === "salir") {
    esSalida = true;
    alert(`¡Gracias por haber utilizado este programa, hasta luego!`);
  }
  return esSalida;
};

while (continua) {
  if (salir(input)) {
    continua = false;
    break;
  } else {
    if (validar(input, continua)) {
      const potencias = [];
      for (let i = 1; i <= 5; i++) {
        const potencia = new Potencia(input, i, calcular(input, i));
        potencias.push(potencia);
      }
      potencias.forEach((potencia) => {
        alert(
          `Cálculo, ${parseInt(Number(potencia.numero))} ^ ${
            potencia.potencia
          } es: ${potencia.resultado}`
        );
      });
    }
  }
  input = prompt(
    `Por favor, elegí otro número entero del 1 al 10 y te encuentro las potencias: 1 a la 5.\nEscriba: "salir" para parar la ejecución.`
  );
}
