var mysql = require('mysql');

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: '',
  //database: 'movieapp'
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
      false /* watched */, movie.vote_count];
    const queryStr = `insert ignore into movies values (?);`
    var query = connection.query(queryStr, [movie_details], function(err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
    console.log(query.sql);
  },
  insertMany: (movies, callback) => {
    var movieArr = movies.map(movie => 
        { return [movie.id, movie.title, movie.release_date, 
                  false /* watched */, movie.vote_count]; 
        });
    // console.log(movieArr);
    const queryStr = 'insert ignore into movies values ?';
    var query = connection.query(queryStr, [movieArr], function(err, results) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
    console.log(query.sql);
  }
}