'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const P = 3.14

rl.question('Введите радиус окружности в сантиметрах: ', (R) => {
  if (R === Number) {
    console.log(`Площадь круга: ${P*R*2} см.кв.`);
    console.log(`Длина окружности: ${2*P*R} см.`);
  }
  rl.close();
});
