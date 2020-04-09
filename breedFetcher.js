const request = require('request');
const catSearch = 'https://api.thecatapi.com/v1/breeds/search?q=';
const catBreed = process.argv.slice(2)[0] || null;

if (!catBreed) {
  console.log('No breed provided in terminal: Program exiting ...');
  return;
}
request(catSearch + catBreed, function(error, response, body) {
  if (error) {
    console.error('error:  Incorrect URl', error); // Print the error if one occurred
    return;
  }
  if (JSON.parse(body).length === 0) {
    console.log(JSON.parse(body).length === 0 ? 'Breed not Found' : '');
    return;
  }
  if (response.statusCode !== 200) {
    console.log(response.statusCode === 404 ? 'Incorrect URL/ Path: 404 Page not found' : '');
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});