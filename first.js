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
