import React from 'react';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="movieDetails">
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}/>
        <p>Vote Count: {this.props.movie.vote_count}</p>
        <p>Release Date: {this.props.movie.release_date}</p>
        <p>Overview: {this.props.movie.overview}</p>
      </div>
    )
  }
}

export default MovieDetails;
