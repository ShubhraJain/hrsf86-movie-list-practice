import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAdd(event) {
    event.preventDefault();
    var title = this.refs.addNewMovieTitle.value;
    this.props.addMovieTitle(title);
    title = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd.bind(this)}>
          <input className="add-movie" type="text" placeholder="Add movie title here" ref="addNewMovieTitle" />
          <button className="add-button">Add</button>
        </form>
      </div>
    )
  }
}

export default AddMovie;