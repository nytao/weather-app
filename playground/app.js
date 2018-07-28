
const yargs = require('yargs');

const geocode = require('./geocode');
const weather = require('./weather');

var argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to look up for weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// console.log(argv);

geocode
  .geocodeAddress(argv.address)
  .then((location) => {
    // console.log(JSON.stringify(location, null, 2));
    console.log(location.address);
    return weather.getWeather(location);
  })
  .then((data) => {
    // console.log(JSON.stringify(data, null, 2));
    console.log(`The temperature is ${data.temperature}, and it feels like ${data.apparentTemperature}.`);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('hello world');
