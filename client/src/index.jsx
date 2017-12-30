import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/app'

ReactDOM.render( <App />, document.getElementById('app'));


// const movies = [
//                   {title: 'Mean Girls'},
//                   {title: 'Hackers'},
//                   {title: 'The Grey'},
//                   {title: 'Sunshine'},
//                   {title: 'Ex Machina'},
//                 ];

// class MovieList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       movies
//     }
//   }

//   render() {
//     return (
//       <div class="outer-container">
//         <Movie movies={this.state.movies}/>
//       </div>
//     )
//   }
// }

