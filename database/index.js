var mysql = require('mysql');
var movieApi = require('../lib/api_key.js');

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  database: 'movielist'
});

module.exports = {
  selectAll: function(callback) {
    const queryStr = 'select * from movies';
    connection.query(queryStr, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(results);  
      }
    });
  },
  insertOne: function(movie, callback) {
    const queryStr = 'insert into movies (id, title, year, watched) values(?, ?, ?, ?)';
    connection.query(queryStr, [...movie], function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(results);
      }
    });
  }
}