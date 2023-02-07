// need to generate random numbers between 1-6 only

var num = Math.random(); //this will generate random no. bt 0-0.9999999999999999999
num = num * 6; // this will generate from 0-6 but in floating
num = Math.floor(num); /// now no floating number but still iincludes 0
num = num + 1; // rid of 0
console.log(num);
