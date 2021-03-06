import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
        post: dummyData
    };
}
componentDidMount() {
 this.setState({ post: dummyData });
//  search will go here
}
  render() {
    return (
      <div className="App">
        
        <SearchBar />
        <PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;
