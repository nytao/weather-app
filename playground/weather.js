const request = require('request');

// location = {
//   latitude,
//   longitude
// }

exports.getWeather = (location) => {
  return new Promise((resolve, reject) => {
    var apiUrl = `https://api.darksky.net/forecast/f49218caa0b2b52d14dfa45e0bca4302/${location.latitude},${location.longitude}`;
    request({
      url: apiUrl,
      json: true
    }, (err, response, body) => {
      if (err) {
        reject(err);
      } else if (response.statusCode !== 200) {
        reject('Connection error!');
      } else {
        resolve(body);
      }
    });
  })
  .then((data) => {
    console.log(`The temperature is ${data.currently.temperature}, and it feels like ${data.currently.apparentTemperature}.`);
  })
  .catch((err) => {
    console.log(err);
  });
};