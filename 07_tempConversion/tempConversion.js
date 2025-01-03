const convertToCelsius = function(t)
{
  t = (t-32) * (5/9)
  return parseFloat(t.toFixed(1))
};

const convertToFahrenheit = function(t)
{
  t = t * (9/5) + 32
  return parseFloat(t.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
