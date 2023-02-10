const arr = [1, 2, 3, 4, 5];
let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr1.push(arr[i] * 2);
// }
// console.log(arr1);

//  using map function

const arr2 = arr.map((item) => {
  return item * 2;
});
console.log(arr2);
