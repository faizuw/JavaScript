function person(pName, pDateOFBirth, pJob) {
  this.name = pName;
  this.yearOFBirth = pDateOFBirth;
  this.job = pJob;
  this.age = function () {
    console.log(2023 - this.yearOFBirth);
  };
}
var adil = new person("Adil", 2000, "Doctor");
var zaid = new person("zaid", 1996, "Software Developer");
console.log(zaid.age());
