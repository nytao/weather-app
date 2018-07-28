const request = require('request');
const weather = require('./weather');

exports.geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var googleAPIUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCM7Dt1ZYTMdDmWI3lxnrQB5qvhTNNMrww&address=${encodeURIComponent(address)}`;
    request({
      url: googleAPIUrl,
      json: true
    }, (err, response, body) => {
      if (err) {
        reject(err);
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Zero results!');
      } else if (body.status === 'OK') {
        console.log(body.results[0].formatted_address);
        resolve({
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      } else {
        reject('Unknown error!');
      }
      // console.log('synchronous');
    });
  })
  .then((location) => {
    weather.getWeather(location);
  })
  .catch((err) => {
    console.log(err);
  });
};
