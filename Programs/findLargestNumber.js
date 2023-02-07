// write  a function which takes an array of numbers and return the largest number
function largestNumber(number) {
  var largest = number[0];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > largest) {
      largest = number[i];
    }
  }
  return largest;
}
console.log(
  "The greates element in an array is: ",
  largestNumber([1, 3, 120, 45, 3, 5, 7, 100])
);
