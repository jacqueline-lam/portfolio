import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import 'bootswatch/dist/litera/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogPostsContainer from './containers/BlogPostsContainer'

class App extends Component {
  render() {
    return (
      <div className='App' id='page-top' >
        <NavBar />
        <Contact />
        {/* When URL matches specified path, render component */}
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={BlogPostsContainer} />
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
