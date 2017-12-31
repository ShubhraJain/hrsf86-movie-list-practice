import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import StatusButtons from './StatusButtons.jsx';
import $ from 'jquery';

// const movies = [
//   {title: 'Mean Girls', watched: false},
//   {title: 'Hackers', watched: false},
//   {title: 'The Grey', watched: false},
//   {title: 'Sunshine', watched: false},
//   {title: 'Ex Machina', watched: false}
// ];

const passThroughFilter = (movie => { return true; } )

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieFilter: passThroughFilter
    }
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    $.ajax({
      url: '/load',
      method: 'GET',
      contentType: 'application/json',
      success: () => {
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
    // this.state.movies.unshift({
    //   title
    // });
    // this.setState({
    //   movies: this.state.movies
    // });
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