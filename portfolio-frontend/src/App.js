import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsContainer from './containers/ProjectsContainer'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>Portfolio</h1>
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
