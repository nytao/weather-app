const request = require('request');

exports.geocodeAddress = (address, callback) => {
  var url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCM7Dt1ZYTMdDmWI3lxnrQB5qvhTNNMrww&address=${encodeURIComponent(address)}`;
  // console.log(url);
  request({
    url,
    json: true
  }, (err, res, body) => {
    if (err) {
      // console.log(err);
      callback(err, null);
    } else if (body.status === 'ZERO_RESULTS') {
      // console.log(`No address found!`);
      callback('No address found!', null);
    } else if (body.status === 'OK') {
      // console.log(body.results[0].formatted_address);
      // console.log(body.results[0].geometry.location.lat, body.results[0].geometry.location.lng);
      var data = {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      };
      callback(null, data);
    } else {
      // console.log(`Unknown error: ${body.status}, response: ${JSON.stringify(body, null, 2)}`);
      callback(body.status ? body.status : 'Unknown error!', null);
    }
  });
};
