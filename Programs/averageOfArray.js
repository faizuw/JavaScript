// write a function which takes a array of numbers, calculate the average of numbers and return it
// function average(...arr) {
//   var res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res = res + arr[i];
//   }
//   res = res / arr.length;
//   return res;
// }

// console.log(average(1, 2, 3, 4));

function average(arr) {
  var res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
  return res / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
