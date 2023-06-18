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
    console.log(`Площадь круга: ${Math.round(calculateTheCircumference(radiusMassege), -1)} см.кв.`);
    console.log(`Длина окружности: ${Math.round(calculateTheAreaOfTheCircle(radiusMassege), -1)} см.`);
  }
  else {console.log(`${radiusMassege} - это не число`)
  }
  rl.close();
});
