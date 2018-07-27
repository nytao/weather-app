
const request = require('request');


exports.getWeather = (location, callback) => {
  var apiURL = `https://api.darksky.net/forecast/f49218caa0b2b52d14dfa45e0bca4302/${location.latitude},${location.longitude}`;
  request({
    url: apiURL,
    json: true
    }, (err, response, body) => {
    if (err) {
      return callback(err);
    }
    if (body.error) {
      return callback(body.error);
    }
    if (!body) {
      return callback('No body found!');
    }
    if (!body.currently) {
      return callback('No weather information found!');
    }
    // console.log('Weather Forecast Information Fetched Successfully!');
    // console.log(JSON.stringify(body, null, 2));
    // console.log(body.currently.temperature);
    callback(null, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    });
  });
};