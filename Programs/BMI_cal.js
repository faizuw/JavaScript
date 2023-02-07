function bmiCal(weight, height) {
  var res = weight / Math.pow(height, 2);
  return Math.round(res);
}

console.log(bmiCal(65, 1.8));
