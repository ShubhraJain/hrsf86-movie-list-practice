import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleError: ''
    }
  }

  handleAdd(event) {
    event.preventDefault();
    var title = this.refs.addNewMovieTitle.value;
    if (title === '') {
      this.setState({
        titleError: 'Please enter a movie title'
      });
      return;
    } else {
      this.setState({
        titleError: ''
      });
    }
    this.props.addMovieTitle(title);
    this.refs.addNewMovieTitle.value = '';
  }

  renderError() {
    if (this.state.titleError) {
      return (
        <div className="add-movie-errors">
          {this.state.titleError} 
        </div>
      )
    }
  }

  render() {
    return (
      <div className="add-container">
        <form onSubmit={this.handleAdd.bind(this)}>
          <input className="add-movie" type="text" placeholder="Add movie title here" ref="addNewMovieTitle" />
          <button className="add-button">Add</button>
        </form>
        {this.renderError()}
      </div>
    )
  }
}

export default AddMovie;