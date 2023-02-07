// write a function which take an array as argument and returns the reverse array
// eg input: [1,2,3,4]
// output: [4,3,2,1]

function reverse(array) {
  let revArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revArray.push(array[i]);
  }
  return revArray;
}
console.log(reverse([1, 2, 3, 4]));
