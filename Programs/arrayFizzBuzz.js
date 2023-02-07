// we need to print the array upto say 100 where if a no is fizz or buzz or fizzbuz we need to prinbt that in array
var result = [];

function arrayFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
  // console.log(result);
}
console.log(arrayFizzBuzz());
