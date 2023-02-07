// write a function which give a random person from list who will eventually pay the bill

function whosPaying(name) {
  var numOfPeople = name.length;
  var randomPersonPosition = Math.floor(Math.random() * numOfPeople);
  var randomPerson = name[randomPersonPosition];
  console.log("the person who will pay the bill is : " + " " + randomPerson);
}

whosPaying(["Zaid", "Payam", "Faisal", "Faizan", "Suhaib"]);
