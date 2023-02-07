//Array is a list of things
//Array lets us store multiple values in a single variable.

let arr = ["Apple", "Orange", "Peach"];
console.log(arr);
let arr1 = ["1", "30", "89"];
console.log(arr1[2]);

arr.push("Pear");
console.log(arr);
arr.unshift("Mango");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

var arr2 = new Array("Adil", "Zaid", "Faisal");
console.log(arr2);

// object literals : it is a container which stores multiple values in key-value pair

let person = {
  firstName: "Faizan",
  lastName: "Wani",
  hobbies: ["programing", "cycling", "traveling"],
  Address: {
    country: "India",
    State: "Jammu and Kashmir",
    pinCode: 190002,
  },
};
console.log(person.hobbies);
person.hobbies.unshift("Badminton");
console.log(person.hobbies);
console.log(person.hobbies.length);

person.hobbies.pop();
console.log(person.hobbies);
person.hobbies.shift();
console.log(person.hobbies);

person.firstName = "Faizuw";
console.log(person);

/// Array of object literals

let student = [
  {
    name: "Faizan",
    age: 19,
    isProgrammer: true,
  },
  {
    name: "Zaid",
    age: 19,
    isProgrammer: true,
  },
  {
    name: "Faisal",
    age: 16,
    isProgrammer: false,
  },
  {
    name: "Zaman",
    age: 29,
    isProgrammer: false,
  },
];
console.log(student[0]);

let xyz = "qw";
switch (xyz) {
  case "tree":
    console.log("This is a tree");
    break;
  case "qwe":
    console.log("qwe");
    break;
  default:
    console.log("default");
    break;
}
