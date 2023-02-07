// write a function which takes an array of  numbers and returns all positive numbers in an array
function getPositiveNumber(number) {
  let positivNumbers = [];

  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      positivNumbers.push(number[i]);
    }
  }

  return positivNumbers;
}

console.log(getPositiveNumber([0, 1, -2, 3, -5]));
