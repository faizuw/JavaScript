var firstName = "Akeel";
var person = {
  firstName: "Adil",
  yearOfBirth: 1990,
  job: "Pilot",
  getName: function () {
    console.log("With-out using the this keyword name is: " + firstName);
    console.log("With using the this keyword name is: " + this.firstName);
  },
  parents: {
    firstName: "Musaib",
    yearOfBirth: 1985,
    job: "Doctor",
    getName: function () {
      console.log(this.firstName);
    },
  },
};

person.getName();
person.parents.getName();
