const request = require('request');

let getWeather = (latitude, longitude, callBack)=> {
  request({
    url:`https://api.darksky.net/forecast/a18db7501d26f7232baec6e1ee39b37b/${latitude}, ${longitude}`,
    json:true
  },(error, response, body)=> {
    if (!error && body.code === 400) {
      callBack("The given location (or time) is invalid.");
    } else if (error) {
      callBack("Couldn't connect to the server");
    } else {
      callBack(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }
  })
}

module.exports = {
  getWeather
}
