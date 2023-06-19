'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculateTheCircumference = (radius) => {
  return (2*Math.PI*radius)
}

const calculateTheAreaOfTheCircle = (radius) => {
  return (Math.PI*(Math.pow(radius, 2)))
}

rl.question('Введите радиус окружности в сантиметрах: ', (radiusMassege) => {
  if (isFinite(radiusMassege)) {
    const radiusMassegeNumber = Number(radiusMassege)
    console.log(`Площадь круга: ${calculateTheCircumference(radiusMassegeNumber).toFixed(2)} см.кв.`);
    console.log(`Длина окружности: ${calculateTheAreaOfTheCircle(radiusMassege).toFixed(2)} см.`);
  }
  else {console.log(`${radiusMassege} - это не число`)
  }
  rl.close();
});
