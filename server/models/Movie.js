// id int NOT NULL  primary key auto_increment,
//   title varchar(200) NOT NULL,
//   -- movie_id int, 
//   release_date date,
//   watched boolean,
//   vote_count int,
//   overview varchar(1000),
//   poster_path varchar(200)

var Sequelize = require('sequelize');

const connection = new Sequelize('movieapp', 'root', '', 
                        {host: 'localhost', 
                        dialect: 'mysql',
                        define: {timestamps: false}
                      });

const Movie = connection.define('movies',
{
  id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false},
  title: {type: Sequelize.STRING, allowNull: false},
  release_date: Sequelize.DATE,
  watched: Sequelize.BOOLEAN,
  vote_count: Sequelize.INTEGER,
  overview: Sequelize.STRING,
  poster_path: Sequelize.STRING
});

Movie.sync();

module.exports.Movie = Movie;
