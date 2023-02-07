// write a function which  takes a number and prints fizzBuzz if the number is divisible by both 3 andf 5:
// if the number is divisible by 3 only the print fizz if the number is divisibke by 5 only then print buzz
// if the number is not divisible by anyb of them then print number:

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "The number is FizzBuzz";
  } else if (number % 3 === 0) {
    return "The number is Fizz";
  } else if (number % 5 === 0) {
    return "The number is Buzz";
  } else {
    return `${number} is neither FizzBuzz nor atleast fizz or buzz`;
  }
}

console.log(fizzBuzz(31));
