let number = document.getElementById('number');
let otv1 = document.getElementById('otv1');
let otv2 = document.getElementById('otv2');
let btn = document.getElementById('btn');
let errors = document.getElementById('errors');

const calculateTheCircumference = (radius) => (2*Math.PI*radius);

const calculateTheAreaOfTheCircle = (radius) => (Math.PI*(Math.pow(radius, 2)));

if (number === null || otv1 === null || otv2 === null || btn  === null || errors === null) {
  console.log('нет одного из элементов');
};

btn.addEventListener('click', function() {
  number.value = ``; 
  otv1.innerHTML = `The area of the circle: 0.00 sm.sq.`; 
  otv2.innerHTML = `Circumference length: 0.00 sm.`;
  errors.innerHTML = '';
});

number.addEventListener('input', function(event) {
  const radius = Number(event.target.value);
  if (!Number.isNaN(radius)) {
    const circumference = calculateTheCircumference(radius);
    const area = calculateTheAreaOfTheCircle(radius);
    otv1.innerHTML = `The area of the circle: ${area.toFixed(2)} sm.sq.`;
    otv2.innerHTML = `Circumference length: ${circumference.toFixed(2)} sm.`;
    errors.innerHTML = '';
  }else {
    otv1.innerHTML = '';
    otv2.innerHTML = '';
    errors.innerHTML = `${event.target.value} - это не число`;
  };
});
