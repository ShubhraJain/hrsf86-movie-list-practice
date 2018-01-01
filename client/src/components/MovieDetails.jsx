import React from 'react';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="movieDetails">
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}/>
        <p><b>Vote Count</b>: {this.props.movie.vote_count}</p>
        <p><b>Release Date</b>: {this.props.movie.release_date}</p>
        <p><b>Overview</b>: {this.props.movie.overview}</p>
      </div>
    )
  }
}

export default MovieDetails;
