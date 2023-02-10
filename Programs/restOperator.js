// const sum = (num1, num2) => console.log(num1 + num2);
// sum(1, 2, 3, 4, 5, 6);

const sum = (num1, num2, ...args) => {
  console.log(num1);
  console.log(num2);
  console.log(args);

  var total = num1 + num2;
  for (let i = 0; i < args.length; i++) {
    total = total + args[i];
  }
  return total;
};
console.log(sum(1, 2, 3, 4, 5, 6));
