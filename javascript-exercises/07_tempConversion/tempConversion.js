const convertToCelsius = function(temp) {
  let con = (temp - 32) * (5/9);
  return parseFloat(con.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let con = (temp * (9/5))+32;
  return parseFloat(con.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
