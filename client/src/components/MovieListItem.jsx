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

  // renderMovieDetails() {
  //   if(this.state.showDetails) {
  //     return <MovieDetails movie={this.props.movie} />
  //   }
  // }
 
  render() {
    return (
      <div className="movie-item">
        <span onClick={this.showMovieDetails.bind(this)}>{this.props.movie.title}</span>
        {this.state.showDetails && <MovieDetails movie={this.props.movie} />}
        {this.renderButton()}
      </div>
    )
  }
}

export default MovieListItem;

      // <div className="movie-item">
      //   <span onClick={this.showMovieDetails()}>{this.props.movie.title}</span>
      //   {this.renderMovieDetails()}
      //   {this.renderButton()}
      // </div>