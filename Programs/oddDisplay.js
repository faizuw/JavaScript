// function oddDisplay(x) {
//   for (let i = x; i > 0; i--) {
//     if (i % 2 != 0) {
//       console.log(i + ",");
//     }
//   }
// }
// oddDisplay(20);

//using while loop
function oddDisplay(x) {
  while (x > 0) {
    if (x % 2 != 0) {
      console.log(x);
    }
    x--;
  }
}
oddDisplay(20);
