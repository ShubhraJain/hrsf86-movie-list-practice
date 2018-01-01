var mysql = require('mysql');

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movieapp'
});

connection.connect(function(err) {
  if (err) {
    console.log('error inside connect*******************', err);
  }
  connection.query('USE movieapp', function(err, results) {
    if (err) {
      console.log('error while using database--------', err);
    }
  })
});

module.exports = {
  selectAll: (callback) => {
    const queryStr = 'SELECT * FROM movies';
    connection.query(queryStr, function(err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);  
      }
    });
  },

  insertOne: (movie, callback) => {
    var movie_details = [movie.id, movie.title, movie.release_date,
      false /* watched */, movie.vote_count, movie.overview, movie.poster_path];
    const queryStr = 'insert ignore into movies values (?);'
    var query = connection.query(queryStr, [movie_details], function(err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
    console.log('inside insert one ---------------------', query.sql);
  },

  insertMany: (movies, callback) => {
    var movieArr = movies.map(movie => 
        { return [movie.id, movie.title, movie.release_date, 
                  false /* watched */, movie.vote_count, movie.overview, movie.poster_path]; 
        });
    const queryStr = 'insert ignore into movies values ?';
    var query = connection.query(queryStr, [movieArr], function(err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
    // console.log('inside insert many ---------------------', query.sql);
  }, 

  updateColumn: (movieTitle, callback) => {
    var queryStr = 'UPDATE movies SET watched = NOT watched WHERE title = "' + movieTitle +'";'
    var query = connection.query(queryStr, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
    console.log('inside update col ---------------------', query.sql);
  }
}