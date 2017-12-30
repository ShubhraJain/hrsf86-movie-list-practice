import React from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMovies() {
    if (this.props.movies.length == 0) {
      return <h4>No Movies Found!!</h4>
    }
    return this.props.movies.filter(this.props.movieFilter).map((movie, index) => 
      <MovieListItem
        key={movie.title}
        movie={movie}
        toggleWatched={this.props.toggleWatched}
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