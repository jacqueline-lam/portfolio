import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // we won't do anything with this data until we get resp back
    // take resp and turn into JS object notation
    fetch('http://localhost:3000/api/v1/projects/')
      // then = we won't do next action until previous resp is finished
      .then(resp => resp.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div className="App" >
        App
      </div>
    );
  }
}

export default App;
