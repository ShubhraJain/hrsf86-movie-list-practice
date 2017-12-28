const axios = require('axios');
const api_key = require('./api_key.js');

module.exports = function(callback) {
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key.TMDB_API_KEY}`)
       .then(response => {
        callback(null, response.data.results);
       })
       .catch(err => {
        callback(err, null);
       });
}