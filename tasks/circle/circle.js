'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculateTheCircumference = (radius) => (2*Math.PI*radius);

const calculateTheAreaOfTheCircle = (radius) => (Math.PI*(Math.pow(radius, 2)));

rl.question('Введите радиус окружности в сантиметрах: ', (message) => {
  const radius = Number(message)
  if (!Number.isNaN(radius)) {
    const circumference = calculateTheCircumference(radius)
    const area = calculateTheAreaOfTheCircle(radius)
    console.log(`Площадь круга: ${circumference.toFixed(2)} см.кв.`);
    console.log(`Длина окружности: ${area.toFixed(2)} см.`);
  }else console.log(`${message} - это не число`);
  rl.close();
});
