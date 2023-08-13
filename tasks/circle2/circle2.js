'use strict';

const calculateTheCircumference = (radius) => (2*Math.PI*radius);

const calculateTheAreaOfTheCircle = (radius) => (Math.PI*(Math.pow(radius, 2)));

let message = document.getElementById('inp').innerHTML

const radius = Number(message);
if (!Number.isNaN(radius)) {
  const circumference = calculateTheCircumference(radius);
  const area = calculateTheAreaOfTheCircle(radius);
  document.getElementById('Circumference').innerHTML = `Площадь окружности: ${circumference.toFixed(2)} см.кв.`;
  document.getElementById('Area').innerHTML = `Длина окружности: ${area.toFixed(2)} см.`;
}else {
  console.log(`${message} - это не число`);
};
