import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import ProjectsContainer from './containers/ProjectsContainer';
// import BlogPostsContainer from './containers/BlogPostsContainer'

class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <Navbar /> */}
        {/* <Route path='/about' component={About} /> */}
        <Route exact path='/' component={Home} />
        <Route path='/projects' render={routerProps => <ProjectsContainer {...routerProps} />} />
        {/* <Route path='/blog' component={BlogPostsContainer} /> */}
      </div>
    );
  }
}

export default App;
