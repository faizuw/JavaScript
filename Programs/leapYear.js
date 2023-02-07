function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "leap year";
  } else {
    return "Not a leap year";
  }
}
console.log(leapYear(2028));
