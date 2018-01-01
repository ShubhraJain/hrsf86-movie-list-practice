const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieDB = require('../database/database.js');
const movieApi = require('../lib/movieAPI.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


app.get('/movies', (req, res) => {
  movieDB.selectAll((err, movies) => {
    if (!movies) {
      res.status(500).send({error: "No movies loaded yet"});
    } else {
      res.status(200).json(movies);
    }
  });
});

app.get('/loadOne', (req, res) => {
  movieApi.getMovies(function(err, movies) {
    movies.forEach(function(movie) {
      movieDB.insertOne(movie, (err, results) => {
        if (err) {
          console.log('error inside load of server/index', err);
        } else {
          console.log('movies added to db:', results.affectedRows);
        }
      });
    });

    res.status(200).json(movies);
  });
});

app.get('/load', (req, res) => {
  movieApi.getMovies(function(err, movies) {
    movieDB.insertMany(movies, (err, results) => {
      if (err) {
        console.log('error inside load of server/index', err);
      } else {
        console.log('movies added to db:', results.affectedRows);
      }
    });

    res.status(200).json(movies);
  });
});

app.post('/movie', (req, res) => {
  if(!req.body) {
    res.status(400).send({error: 'Bad Request'});
  } else {
    movieDB.insertOne(req.body, (err, results) => {
      if (err) {
        res.status(500).send({error: err});
      } else {
        res.status(201).end();
      }
    });
  }  
});

app.post('/updateMovie', (req, res) => {
  movieDB.updateColumn(req.body.title, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).end();
    }
  });
});
