import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasWatched: false
    }
  }

  toggleWatched() {
    console.log('inside toggleWatched');
  }

  render() {
    return (
      <div className="movie-item">{this.props.title}
        <button className="unwatched-button" onClick={this.toggleWatched.bind(this)}>Watched</button>
      </div>
    )
  }
}

export default MovieListItem;