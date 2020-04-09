const request = require('request');
const catSearch = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (catBreed, callback) =>{
  if (!catBreed) {
    callback('No breed provided in terminal: Program exiting ...');
    return;
  }
  request(catSearch + catBreed, function(error, response, body) {
    if (error) {
      callback('error:  Incorrect URl', error); // Print the error if one occurred
      return;
    }
    if (JSON.parse(body).length === 0) {
      callback(JSON.parse(body).length === 0 ? 'Breed not Found' : '');
      return;
    }
    if (response.statusCode !== 200) {
      callback(response.statusCode === 404 ? 'Incorrect URL/ Path: 404 Page not found' : '');
      return;
    }
    const data = JSON.parse(body);
    callback(null, data[0].description.trim());

  });
};

module.exports = fetchBreedDescription;