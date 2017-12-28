const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieDB = require('../database/index.js');
const movieApi = require('../lib/api_key.js');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/movies', (req, res) => {
  movieDB.selectAll((err, data) => {
    if (err) {
      res.status(500)
    } else {
      res.status(200)
    }
  });
});

app.post('/movie', (req, res) => {
  
});