'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const P = Math.PI

rl.question('Введите радиус окружности в сантиметрах: ', (R) => {
  if (isFinite(R)) {
    console.log(`Площадь круга: ${Math.round(P*R*2)} см.кв.`);
    console.log(`Длина окружности: ${Math.round(2*P*R)} см.`);
  }
  else {console.log(`${R} - это не число`)
  }
  rl.close();
});
