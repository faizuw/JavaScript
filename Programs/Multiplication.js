//write a function which takes a number and prints the table:

function multiplication(a) {
  var res;
  for (var i = 1; i <= 10; i++) {
    res = a * i;
    console.log(a, "*", i, "=", res);
  }
}

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

// multiplication(7);
printTable(2);
