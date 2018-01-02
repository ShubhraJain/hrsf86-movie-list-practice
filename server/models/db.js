// https://github.com/lorenseanstewart/sequelize-crud-101/blob/master/server/config/db.js

var Sequelize = require('sequelize');

const connection = new Sequelize('movieapp', 'root', '', 
                        {host: 'localhost'});


const db = {};
db.Sequelize = Sequelize;
db.connection = connection;

db.Movie = require('./Movie.js')(Sequelize, connection)

module.exports.db = db;