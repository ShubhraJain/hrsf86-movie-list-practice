var mysql = require('mysql');
var movieApi = require('../lib/movieAPI.js');

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  database: 'movielist'
});

module.exports = {
  selectAll: (callback) => {
    const queryStr = 'select * from movies';
    connection.query(queryStr, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(results);  
      }
    });
  },
  insertOne: (movie, callback) => {
    const queryStr = 'insert into movies (id, title, release_date, watched, vote_count)\
                      values(?, ?, ?, ?, ?)';
    connection.query(queryStr, [...movie], function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(results);
      }
    });
  },
  insertMany: (movies, callback) => {
    const queryStr = 'insert into movies(id, title, release_date, watched, vote_count)\
                      values ?';
    connection.query(queryStr, movies, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(results);
      }
    });
  }
}