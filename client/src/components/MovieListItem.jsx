import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleWatched() {
    this.props.toggleWatched(this.props.movie.title);
  }

  renderButton() {
    if (this.props.movie.watched) {
      return <button className="watched-button" onClick={this.toggleWatched.bind(this)}>Watched</button>
    } else {
      return <button className="unwatched-button" onClick={this.toggleWatched.bind(this)}>Watched</button>
    }
  }

  render() {
    return (
      <div className="movie-item">{this.props.movie.title}
      {this.renderButton()}
      </div>
    )
  }
}

export default MovieListItem;