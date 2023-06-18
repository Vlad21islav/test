'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const length = (R) => {
  return Math.round((2*Math.PI*R), 3)
}

const square = (R) => {
  return Math.round((Math.PI*(Math.pow(R, 2))), 3)
}

rl.question('Введите радиус окружности в сантиметрах: ', (Radius) => {
  if (isFinite(Radius)) {
    console.log(`Площадь круга: ${square(Radius)} см.кв.`);
    console.log(`Длина окружности: ${length(Radius)} см.`);
  }
  else {console.log(`${Radius} - это не число`)
  }
  rl.close();
});