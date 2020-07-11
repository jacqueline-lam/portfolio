import React, { Component } from 'react';
// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogPostsContainer from './containers/BlogPostsContainer'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/litera/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='App' id='page-top' >
        <NavBar />
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={BlogPostsContainer} />
        <Route path='/contact' component={Contact} />
        < ProjectsContainer />
      </div>
    );
  }
}

export default App;
