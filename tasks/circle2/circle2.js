const calculateTheCircumference = (radius) => (2*Math.PI*radius);

const calculateTheAreaOfTheCircle = (radius) => (Math.PI*(Math.pow(radius, 2)));

document.getElementById('number').addEventListener('input', function() {
  const radius = Number(this.value);
  if (!Number.isNaN(radius)) {
    const circumference = calculateTheCircumference(radius);
    const area = calculateTheAreaOfTheCircle(radius);
    document.getElementById('otv1').innerHTML = `The area of the circle: ${area.toFixed(2)} sm.sq.`;
    document.getElementById('otv2').innerHTML = `Circumference length: ${circumference.toFixed(2)} sm.`;
  }else {
    document.getElementById('otv1').innerHTML = `${this.value} - это не число`;
    document.getElementById('otv2').innerHTML = ``;
  };
});
