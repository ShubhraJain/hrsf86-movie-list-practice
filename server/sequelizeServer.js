module.exports = {
  movies: {
    get: function (req, res) => {
      Movies.findAll()
        .complete(function(err, movies) {
          if (!movies) {
            res.status(500).send({error: "No movies loaded yet"});
          } else {
            res.status(200).json(movies);
          }
        });
    },
    post: function(req, res) => {
      Movies.upsert({
        id: ,
        title: req.body.title,
        release_date:,
        watched: false,
        vote_count:,
        overview:,
        poster_path:
      })
      .complete(err, results) {
        if (err) {
          res.status(500).send({error: err});
        } else {
          res.status(201).end();
        }
      }
    }
  }
}