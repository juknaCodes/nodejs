const request = require('request');

let getGeoCode = (address, callBack)=> {
  let encodedAddress = encodeURIComponent(address);
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAWyytswL9HFOb6JsPpMKnARQsleML_6fo`,
    json:true
  },(error, response, body)=> {
    if (error) {
      callBack("Error encountered");
    } else if (body.status === 'ZERO_RESULTS') {
      callBack("Couldn't find the requested address");
    } else {
      callBack(undefined,  {
        'add': body.results[0].formatted_address,
        'lat': body.results[0].geometry.location.lat,
        'lng': body.results[0].geometry.location.lng
      });
    }
  })
}

module.exports = {
  getGeoCode
}
