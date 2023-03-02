const speed = 20;
const time = 10;
let loadData = false;

function timeTravel(x, y) {
  if (x >= y) {
    return (loadData = true);
  } else {
    return (loadData = false);
  }
}
function nebular() {
  if (loadData === true) {
    return console.log("Welcome to stone age!");
  }
}

timeTravel(speed, time);
nebular();
