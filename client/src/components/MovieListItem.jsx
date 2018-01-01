import React from 'react';
import MovieDetails from './MovieDetails.jsx';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showDetails: false
    }
  }


  toggleWatched() {
    this.props.toggleWatched(this.props.movie.title);
  }

  renderButton() {
    if (this.props.movie.watched) {
      return <button className="watched-button" onClick={this.toggleWatched.bind(this)}>Watched</button>
    } else {
      return <button className="unwatched-button" onClick={this.toggleWatched.bind(this)}>To Watch</button>
    }
  }

  showMovieDetails() {
    this.setState ( {
      showDetails: !this.state.showDetails
    });
  }

  renderMovieDetails() {
    if(this.state.showDetails) {
      return <MovieDetails movie={this.props.movie} />
    }
  }
 
  render() {
    return (
      <div className="movie-entry">      
        <div className="movie-item">
          <span className="movie-title" onClick={() => this.showMovieDetails(this.state.showDetails)}>{this.props.movie.title}</span>
          {this.renderButton()}
        </div>
        {this.renderMovieDetails()}
      </div>
    )
  }
}

export default MovieListItem;

        // {this.state.showDetails && <MovieDetails movie={this.props.movie} />}