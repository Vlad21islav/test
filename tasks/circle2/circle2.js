const calculateTheCircumference = (radius) => (2*Math.PI*radius);

const calculateTheAreaOfTheCircle = (radius) => (Math.PI*(Math.pow(radius, 2)));

if (document.getElementById('nunmber') === undefined || document.getElementById('otv1') === undefined || document.getElementById('otv2') === undefined) {
  console.log('нет одного из элементов');
};

function clearInp() {
  document.getElementById('number').value = ``; 
  document.getElementById('otv1').innerHTML = `The area of the circle: 0.00 sm.sq.`; 
  document.getElementById('otv2').innerHTML = `Circumference length: 0.00 sm.`;
};

document.getElementById('number').addEventListener('input', function(event) {
  const radius = Number(event.target.value);
  if (!Number.isNaN(radius)) {
    const circumference = calculateTheCircumference(radius);
    const area = calculateTheAreaOfTheCircle(radius);
    document.getElementById('otv1').innerHTML = `The area of the circle: ${area.toFixed(2)} sm.sq.`;
    document.getElementById('otv2').innerHTML = `Circumference length: ${circumference.toFixed(2)} sm.`;
  }else {
    document.getElementById('otv1').innerHTML = `${radius} - это не число`;
    document.getElementById('otv2').innerHTML = ``;
  };
});
