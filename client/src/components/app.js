import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import StatusButtons from './StatusButtons.jsx';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies
    }
  }

  searchMovies(searchStr) {
    if (searchStr === '') {
      this.setState({movies: movies})
    }
    this.setState({
      movies: movies.filter((movie, index) => 
      movie.title.includes(searchStr)) 
    });
  }

  addMovieTitle(title) {
    this.state.movies.unshift({
      title
    });
    this.setState({
      movies: this.state.movies
    });
  }

  render() {
    return(
        <div className="main">
          <h2>MovieList</h2>
          <AddMovie addMovieTitle={this.addMovieTitle.bind(this)}/>
          <StatusButtons />
          <Search onSearch={this.searchMovies.bind(this)}/>
          <MovieList movies={this.state.movies}/>
        </div>
    )
  }
} 

export default App;