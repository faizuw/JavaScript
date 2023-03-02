function naturatNum(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    if (x > 0) {
      sum = sum + i;
    }
  }
  console.log(`The sum of first ${x} numbers is ${sum}`);
}

// console.log(naturatNum(50));
naturatNum(50);
