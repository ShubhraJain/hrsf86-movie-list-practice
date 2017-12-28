import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import AddMovie from './AddMovie';
import StatusButtons from './StatusButtons';

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
    console.log("searched for : " + searchStr);
    console.log(this);
    console.log(this.state);
    if (searchStr === '') {
      this.setState({movies: movies})
    }
    this.setState({
      movies: movies.filter((movie, index) => 
      movie.title.includes(searchStr)) 
    });
  }

  addMovieTitle(title) {
    // Needs to be placed in movielist component
    // if (title === '') {
    //   console.log('title is empty');
    //   return <div>Please enter a movie title!!</div>
    // }
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