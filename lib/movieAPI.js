const axios = require('axios');
const api_key = require('./api_key.js');

module.exports = {
  getMovies: (callback) => {
    // axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key.TMDB_API_KEY}`)
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f8119c4ec2dd4ee955a6116be5451c14')
    .then( response => {
      console.log('inside then ===========', response.data.results[0]);
      callback(null, response.data.results);
    })
    .catch( err => {
      console.error('inside catch', err);
      callback(err, null);
    });
  }
}

