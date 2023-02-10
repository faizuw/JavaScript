let arr = [1, 2, 3, 4, 5];
let arr1 = [...arr];
let arr2 = [0, ...arr, ...arr1, 89]; /// contatination using spread operator

arr.push(9);
console.log(arr);

console.log(arr1);
console.log(arr2);

let obj = {
  name: "john",
  lastName: "lark",
};

let obj1 = {
  age: 20,
};
let obj2 = { ...obj, ...obj1 };
console.log(obj2);
