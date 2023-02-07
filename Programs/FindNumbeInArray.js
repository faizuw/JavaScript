//Write a function which finds a number in an array of numbers:
//Return true id the number isa in the array otherwise return false.

// function search(array, check) {
//   var res = array.includes(check);
//   return res;
// }
// console.log(search([1, 2, 3], 5));

function findNumInArray(num, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (num === numbers[i]) {
      return true;
    }
  }
  return false;
}

console.log(findNumInArray(14, [1, 2, 3, 4]));
