function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5); // stores x=5 in its lexical env
const add10 = makeAdder(10); // stores x=10 in its lexical env
console.log(add5(2)); //7
console.log(add10(2)); //12
