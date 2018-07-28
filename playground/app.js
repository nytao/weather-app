
const yargs = require('yargs');
const geocode = require('./geocode');

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

geocode.geocodeAddress(argv.address);
