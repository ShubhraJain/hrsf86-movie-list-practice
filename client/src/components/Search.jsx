import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-box" type="text" placeholder="Search..." ref="searchStr"/>
        <button className="go-button" onClick={this.handleGo.bind(this)}>Go!</button>
      </div>
    )
  }

  handleGo(event) {
    // console.log("searchStr = " + this.refs.searchStr.value);
    const searchStr = this.refs.searchStr.value;
    this.props.onSearch(searchStr);
    this.refs.searchStr.value = '';
  }

}

export default Search;