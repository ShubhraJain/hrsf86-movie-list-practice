const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieDB = require('../database/index.js');
const movieApi = require('../lib/movieAPI.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

// const movies = [
//   {title: 'Mean Girls', watched: false},
//   {title: 'Hackers', watched: false},
//   {title: 'The Grey', watched: false},
//   {title: 'Sunshine', watched: false},
//   {title: 'Ex Machina', watched: false}
// ];

app.get('/movies', (req, res) => {
  // movieDB.selectAll((err, data) => {
    if (!movies) {
      res.status(500).send({error: err});
    } else {
      res.status(200).json(movies);
    }
  // });
});

app.get('/load', (req, res) => {
  movieApi.getMovies(function(data) {
    res.status(200).json(data);
  });
});

app.post('/movie', (req, res) => {

  var newMovie = {}
  if(!req.body) {
    res.status(400).send({error: 'Bad Request'});
  } else {
    // movieDB.insertOne(newMovie, (err) => {
    //   if (err) {
    //     res.status(500).send({error: err});
    //   } else {
    //     res.status(201);
    //   }
    // });
    movies.unshift({
      title: req.body.title,
      watched: false
    });
    res.status(201).json(movies);
  }  
});
