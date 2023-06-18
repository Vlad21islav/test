'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculateTheCircumference = (radius) => {
  return Math.round((2*Math.PI*radius), 3)
}

const calculateTheAreaOfTheCircle = (radius) => {
  return Math.round((Math.PI*(Math.pow(radius, 2))), 3)
}

rl.question('Введите радиус окружности в сантиметрах: ', (Radius) => {
  if (isFinite(Radius)) {
    console.log(`Площадь круга: ${calculateTheCircumference(Radius)} см.кв.`);
    console.log(`Длина окружности: ${calculateTheAreaOfTheCircle(Radius)} см.`);
  }
  else {console.log(`${Radius} - это не число`)
  }
  rl.close();
});
