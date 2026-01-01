const convertToCelsius = function(temp) {
  total = (temp - 32)*100/180;
  return Number(total.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  total = (temp*180/100)+32
  return Number(total.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
