// write a function which takes 2 array as input and return the merged array of the 2 array

function merged(firstArray, secondArray) {
  let mergedArray = [];
  for (Element of firstArray) {
    mergedArray.push(Element);
  }
  for (Element of secondArray) {
    mergedArray.push(Element);
  }
  return mergedArray;
}

let Firstarr = [1, 2, 3];

let Secondarr = [4, 5, 6];
console.log(Firstarr);
console.log(Secondarr);
console.log(merged(Firstarr, Secondarr));
