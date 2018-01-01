const axios = require('axios');
const api_key = require('./api_key.js');

module.exports = {
  getMovies: (callback) => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key.key}`)
    .then( response => {
      callback(null, response.data.results);
    })
    .catch( err => {
      console.error('inside catch', err);
      callback(err, null);
    });
  }
}

