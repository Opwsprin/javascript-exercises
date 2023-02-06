const convertToCelsius = function(tempInFahr) {
  return Number(((tempInFahr-32)*5/9).toFixed(1));
};

const convertToFahrenheit = function(tempInCelsius) {
  return Number((tempInCelsius*9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
