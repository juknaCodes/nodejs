const request = require('request');

let getGeoCode = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAWyytswL9HFOb6JsPpMKnARQsleML_6fo`,
      json:true
    },(error, response, body)=> {
      if (error) {
        reject("Error encountered");
      } else if (body.status === 'ZERO_RESULTS') {
        reject("Couldn't find the requested address");
      } else {
        resolve({
          'add': body.results[0].formatted_address,
          'lat': body.results[0].geometry.location.lat,
          'lng': body.results[0].geometry.location.lng
        });
      }
    })
  })
}

getGeoCode("000000").then((location)=> {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})
