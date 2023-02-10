class person {
  constructor(name, birthYear) {
    this.name = name;
    this.yearOfBirth = birthYear;
  }
  getDetail = () => {
    return `Name: ${this.name} and age: ${2023 - this.yearOfBirth}`;
  };
}
var adil = new person("Adil", 1997);
console.log(adil.getDetail());
