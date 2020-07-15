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
// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className='App' id='page-top' >
        <NavBar />
        <Route exact path='/' component={Home} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path='/about' component={About} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path='/blog' component={BlogPostsContainer} onUpdate={() => window.scrollTo(0, 0)} />
        <Route path='/contact' component={Contact} onUpdate={() => window.scrollTo(0, 0)} />
        < ProjectsContainer />
      </div>
    );
  }
}

export default App;
