console.log("Hello world");
console.log("My name is Faizan Wani");
// this is how we write comments in javascript.
var a = 10;
console.log(typeof a);
if (a > 5) {
  console.log("varibale a is having greatter number then 5");
} else {
  console.log("varibale a is having lesser number then 10");
}
// variables in javaScript
var b;
console.log(typeof b);
b = null;
console.log(typeof b);
var firstName = "Faizan";
var lastName = "Wani";
firstName = "Faizuw";
console.log(firstName, lastName);
// console.log(c);
// let c;

console.log(d);
var d;

//Constants in javaScript
//we can chnage the value of varible but we cannot change the value of const after declaration.. constants are static

const name = "faisal";
// name = "zaid"; wont work
console.log(name);

//Varible naming rules:
// 1 No spaces
// 2 Must begin with _, $, or a letter
// 3 can conatin letter, numbers, underscore and dollar sigm
// 4 Case sensitive

// Data Types:

var num = 10;
var str = "abc";
var isTrue = false;
var unDefined;
console.log(typeof num);
console.log(typeof str);
console.log(typeof isTrue);
console.log(typeof unDefined);

//String concatination:

let fName = "Faizan";
let lName = "Wani";

console.log(fName.concat(" ", "Wani is my "));

console.log(fName + " " + lName);

let myfullName = `${fName} ${lName} is my full name.`;
console.log(myfullName);

var inc = 120;

console.log(inc);

// program to take input from user as character and display whether it is a consonent and vowel

// var char = window.prompt("Enter a character: ");

// switch (char) {
//   case "a":
//   case "A":
//     document.write("The character you have entered is a vowel");
//     break;
//   case "e":
//   case "E":
//     document.write("The character you have entered is a vowel");
//     break;
//   case "i":
//   case "I":
//     document.write("The character you have entered is a vowel");
//     break;
//   case "o":
//   case "O":
//     document.write("The character you have entered is a vowel");
//     break;
//   case "u":
//   case "U":
//     document.write("The character you have entered is a vowel");
//     break;
//   default:
//     document.write("The character you have entered is a consonunt");
// }

// var a = window.prompt("Enter first number");
// var b = window.prompt("Enter second number");
// function arithmetic(x, y) {
//   var add = x + y;
//   var sub = x - y;
//   var mul = x * y;
//   var div = x / y;
//   document.write(`The addition is :${add}`);
//   document.write("<br/>");
//   document.write(`The subtraction is :${sub}`);
//   document.write("<br/>");
//   document.write(`The multiplication is :${mul}`);
//   document.write("<br/>");
//   document.write(`The division is :${div}`);
//   document.write("<br/>");
// }

// arithmetic(parseInt(a), parseInt(b));

var mul = window.prompt("Enter the number");
function table(a) {
  for (let i = 1; i <= 10; i++) {
    document.write(`${a} * ${i} = ${a * i} `);
    document.write("<br/>");
  }
}
table(mul);
