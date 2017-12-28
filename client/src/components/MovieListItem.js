import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-item">{this.props.title}</div>
    )
  }
}

export default MovieListItem;