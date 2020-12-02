const places = require('./places.json');

// access oakley from the nested object in places.json

console.log('Places are:', places['Georgia']['Atlanta']['East Lake']["Chris' House"]['Living Room']["Oakley's Bed"]);

// write a function that prints out the city names in a given State.

const getCities = (state) => {
   console.log(Object.keys(places[state]))
}

getCities('Georgia')

