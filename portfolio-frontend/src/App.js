import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogPostsContainer from './containers/BlogPostsContainer'

class App extends Component {
  render() {
    return (
      <div className='App' id='page-top' >
        <NavBar />
        {/* <Route path='/about' component={About} /> */}
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={BlogPostsContainer} />
        < ProjectsContainer />
      </div>
    );
  }
}

export default App;
