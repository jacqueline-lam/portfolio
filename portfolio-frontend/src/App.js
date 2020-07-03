import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProjectsContainer from './containers/ProjectsContainer'
import BlogPostsContainer from './containers/BlogPostsContainer'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          {/* <Navbar /> */}
          {/* <Route path='/about' component={About} /> */}
          <Route path='/projects' component={ProjectsContainer} />
          <Route path='/blog' component={BlogPostsContainer} />
        </Router>
      </div>
    );
  }
}

export default App;
