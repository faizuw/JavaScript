// write a functiuon which takes principal, rate of interest and time as input an returns the simple interest

function simpleInterest(P, R, T) {
  var Amount;
  //Simple Interest=Principle * Rate * Interest /100
  Amount = (P * R * T) / 100;
  return Amount;
}

// function simpleInterest(P, R, T) {
//      return (P * R * T) / 100;;
//   }

var finalAmount = simpleInterest(10000, 8, 1);
console.log("Simple interest is equal to : ", finalAmount);
