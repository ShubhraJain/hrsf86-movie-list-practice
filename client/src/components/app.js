import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import StatusButtons from './StatusButtons.jsx';
import $ from 'jquery';

const passThroughFilter = (movie => { return true; } )

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieFilter: passThroughFilter
    }
  }

  componentWillMount() {
    this.loadMovies();
  }

  loadMovies() {
    $.ajax({
      url: '/load',
      method: 'GET',
      contentType: 'application/json',
      success: () => {
        console.log("inside load movies success");
        this.getMovies();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getMovies () {
    $.ajax({
      url: '/movies',
      method: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log('data in get movies: ', data);
        this.setState ({
          movies: data
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addMovieTitle(title) {
    console.log('title in add movie', JSON.stringify(title));
    $.ajax({
      url: '/movie',
      method: 'POST',
      data: JSON.stringify({
        title: title,
        watched: false
      }),
      contentType: 'application/json',
      success: () => {
        this.getMovies();
      },
      error: (err) => {
        console.log(err);
      }
    })
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
    $.ajax({
      url: '/updateMovie',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        title: movieTitle
      }),
      success: () => {
        this.getMovies();
      },
      error: (err) => {
        console.log('error while updating watched status-----------', err);
      }
    });
  }
  
  changeFilter(filterFunc) {
    this.setState({movieFilter: filterFunc});
  }

  searchMovies(searchStr) {
    if (searchStr === '') {
      this.setState({movies: this.state.movies})
    }
    this.setState({
      movies: this.state.movies.filter((movie, index) => 
      movie.title.includes(searchStr)) 
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