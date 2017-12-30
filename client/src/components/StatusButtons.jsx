import React from 'react';

class StatusButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  watchedFilter(movie) {
    return movie.watched;
  }
  unWatchedFilter(movie) {
    return !movie.watched;
  }

  handleWatched(event) {
    this.props.changeFilterFunc(this.watchedFilter);
  }

  handleUnwatched(event) {
    this.props.changeFilterFunc(this.unWatchedFilter);
  }

  render() {
    return (
      <div className="status-buttons">
        <button className="status-btn-name" onClick={this.handleWatched.bind(this)}>Watched</button>
        <button className="status-btn-name" onClick={this.handleUnwatched.bind(this)}>To Watch</button>
      </div>
    )
  }
}

export default StatusButtons;