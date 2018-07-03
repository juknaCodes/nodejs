const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

let args = yargs
  .options({
    a: {
      describe:"Address to fetch weather",
      alias: 'address',
      demand: true,
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  geocode.getGeoCode(args.address, (errorMessage, response) => {
    if (errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(response.add);
      weather.getWeather(response.lat, response.lng, (errorMessage, response) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(`The actual temperature is ${response.temperature} but feels like ${response.apparentTemperature}`);
        }
      });
    }
  });
