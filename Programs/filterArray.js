const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var res = num.filter((item) => {
  return item % 2 === 0;
});
console.log(res);

const arr = [-1, -2, -3, -4, 1, 2, 3, 4];
const result = arr.find((item) => {
  return item % 2 === 0 && item > 0;
});
console.log(result);

const result1 = arr.findIndex((item) => {
  //   return item % 2 === 0 && item > 0;
  return item === 4;
});
console.log(result1);
