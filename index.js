const catBreed = process.argv[2] || null;
const fetchBreedDescription = require('./breedFetcher');

fetchBreedDescription(catBreed, (err, description) =>{
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(description);
  }
});