var name = "fiazuw";
lastName = "Saleem";
var person = {
  name: "Faizan",
  lastName: "Wani",
  age: 30,
  info: () => {
    console.log(this.name);
  },
};
var name = "fiazuw";
person.info();
