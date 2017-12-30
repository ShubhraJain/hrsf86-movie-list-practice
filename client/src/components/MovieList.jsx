import React from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends React.Component {

  renderMovies() {
    if (this.props.movies.length == 0) {
      return <h4>No Movies Found!!</h4>
    }
    return this.props.movies.map((movie, index) => 
      <MovieListItem
        key={movie.title}
        movie={movie}
      />
    )
  }

  render() {
    return(
      <div className="movies-list">
      {this.renderMovies()}
      </div>
    )
  }
}

export default MovieList;