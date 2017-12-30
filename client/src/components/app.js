import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import StatusButtons from './StatusButtons.jsx';

const movies = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: false}
];

const passThroughFilter = (movie => { return true; } )

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies,
      movieFilter: passThroughFilter
    }
  }

  toggleWatched(movieTitle) {
    this.setState({
      movies: this.state.movies.map( movie => {
        return {
          title: movie.title, 
          watched: (movie.title === movieTitle) ? !movie.watched : movie.watched
        };
      })
    });
  }
  
  changeFilter(filterFunc) {
    this.setState({movieFilter: filterFunc});
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
          <StatusButtons changeFilterFunc={this.changeFilter.bind(this)}/>
          <Search onSearch={this.searchMovies.bind(this)}/>
          <MovieList 
            movies={this.state.movies} 
            movieFilter={this.state.movieFilter}
            toggleWatched={this.toggleWatched.bind(this)}
          />
        </div>
    )
  }
} 

export default App;