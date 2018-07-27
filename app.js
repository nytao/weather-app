const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'enter an address',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// console.log(argv);

geocode.geocodeAddress(argv.address, (error, data) => {
  if (error) {
    return console.log(error);
  }
  console.log('Success!');
  // console.log(JSON.stringify(data, null, 2));
  console.log(data.address);
  weather.getWeather({
    latitude: data.latitude,
    longitude: data.longitude
  }, (err, weatherData) => {
    if (err) {
      return console.log(err);
    }
    console.log('Weather Forecast Information Fetched Successfully!');
    // console.log(JSON.stringify(weatherData, null, 2));
    console.log(`The temperature is ${weatherData.temperature}, and it feels like ${weatherData.apparentTemperature}.`);
  });
  // console.log(`The latitude is ${data.lat}, and the longitude is ${data.lng}`);
});
