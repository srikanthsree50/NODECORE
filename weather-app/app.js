 const request = require('request');

// const url = 'https://api.darksky.net/forecast/90d67c772f6cd89f5c4baad1084ec07e/37.8267,-122.4233';

// request({url:url,json:true},(error,response) => {
//  if(error) {
//      console.log('unable to connect to weather server...');
//  }
//  else if (response.body.error)
//  {
//     console.log('unable to find to location ...');
//  }
//  else {
//     console.log(response.body.daily.data[0].summary + 'it is currently  ' + response.body.currently.temperature + '  degrees out there...');
// }
// })




////////////////////////////////////////////////////
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angles.json?access_token=pk.eyJ1Ijoic3Jpa2FudGhzcmVlNTAiLCJhIjoiY2p1OWplOXh2Mjh6aTQzdGF6bGV6cTliZCJ9.aeSHzPqJ37YmGW3T8B46sw'

request({url:geocodeUrl,json:true},(error,response) => {
    if(error) {
        console.log('unable to connect to server...');
    }
    else if (response.body.error)
    {
       console.log('unable to find to location ...');
    }
    else{
const latitude = response.body.features[0].center[0];
const longitude = response.body.features[0].center[1];

console.log(latitude,longitude);
    }
    })