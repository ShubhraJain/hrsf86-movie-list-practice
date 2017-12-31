const axios = require('axios');
const api_key = require('./api_key.js');

const getMovies = (callback) => {
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key.TMDB_API_KEY}`)
  .then(response => {
    callback(null, response.data.results);
  })
  .catch(err => {
    console.error('inside catch');
    callback(err, null);
  });
}

module.exports = {
  getMovies: getMovies
}