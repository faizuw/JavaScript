// Funtion: a group/block that performs a particular task.

// function printDetails() {
//   console.log("My name is Faizan wani ");
//   console.log("My name is Faizan wani ");
//   console.log("My name is Faizan wani ");
//   console.log("My name is Faizan wani ");
// }
// printDetails();

let fruits = ["Apple", "Orange", "Banana", "Pear"];
let coding = ["Java", "kotlin", "JavaScript"];

function fruitNamesUsingFor() {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

function fruitNamesUsingWhile() {
  let i = 0;
  while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
  }
}

function fruitNamesUsingForOf() {
  for (x of fruits) {
    console.log(x);
  }
}
function printElements(array) {
  for (i of array) {
    console.log(i);
  }
}

fruitNamesUsingFor();
fruitNamesUsingWhile();
fruitNamesUsingForOf();
printElements(coding);
printElements(fruits);

//Return type funtion : this allows us to do many more operations on that
let a = 1;
let b = 22;

function sum(num1, num2) {
  const sum = num1 + num2;
  //   console.log(sum);
  return sum;
}

console.log(sum(12, 30)); //or
let mySum = sum(10, 30);
let second = mySum + 20;
console.log(second);

// Arrow Function:

const difference = (num1, num2) => {
  return (diff = num1 - num2);
};

let sub = difference(10, 2);
console.log(sub);

const sayHello = (name) => console.log("Hello ", name);

sayHello("Faizan Wani");
const prompt = require("prompt-sync")();
var Names = prompt("Enter your name: ");
