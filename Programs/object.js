var car = {
  name: "Maruti",
  manufacturer: {
    name: "Suzuki",
    location: "Delhi",
  },
  color: "Black",
  applyBrakes: function () {
    setTimeout(function () {
      console.log("the car is stopping");
    }, 3000);
  },
};
console.log(car.name);
console.log(car.manufacturer);
console.log(car.applyBrakes());
